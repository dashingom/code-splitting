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

class Landing extends Component {
  render() {
    const { changeLocale, state } = this.context;
    const { locale } = state;
    return (
      <ConfigProvider locale={locale}>
        <Content style={{ padding: "0 50px" }}>
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
