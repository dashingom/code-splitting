import React, { Component } from "react";
import { MyContext } from "./MyProvider";
import {
  Layout,
  Card,
  Row,
  Col,
  ConfigProvider,
  Radio,
  Select,
  DatePicker,
  TimePicker,
} from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import enUS from "antd/es/locale/en_US";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

import C1 from "./C1";
import C2 from "./C2";

moment.locale("en");

const { Content } = Layout;
const { Option } = Select;
const { RangePicker } = DatePicker;

// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }
  render() {
    const { changeLocale, state } = this.context;
    const { locale } = state;
    return (
      <ConfigProvider locale={locale}>
        <Content style={{ padding: "0 50px" }}>
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {this.state.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="change-locale">
            <span style={{ marginRight: 16 }}>
              Change locale of components:{" "}
            </span>
            <Radio.Group value={locale} onChange={changeLocale}>
              <Radio.Button key="en" value={enUS}>
                English
              </Radio.Button>
              <Radio.Button key="cn" value={zhCN}>
                中文
              </Radio.Button>
            </Radio.Group>
          </div>
          <Row>
            <Col span={12}>
              <Card title="Child 1">
                <C1 />
                <div className="example">
                  <Select showSearch style={{ width: 200 }}>
                    <Option value="jack">jack</Option>
                    <Option value="lucy">lucy</Option>
                  </Select>
                  <DatePicker />
                  <TimePicker />
                  <RangePicker style={{ width: 200 }} />
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Child 2">
                <C2 />
              </Card>
            </Col>
          </Row>

          <Col span={12}>
            <Card title="Child 2">
              <Radio.Group defaultValue="host" buttonStyle="solid">
                <Radio.Button value="host">Host</Radio.Button>
                <Radio.Button value="network">Network</Radio.Button>
              </Radio.Group>
            </Card>
          </Col>
        </Content>
      </ConfigProvider>
    );
  }
}

Landing.contextType = MyContext;

export default Landing;
