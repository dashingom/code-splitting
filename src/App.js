import React from 'react';
import MyProvider from './MyProvider';
import './App.css';
import { Layout, Card, Row, Col } from 'antd';
import C1 from './C1';
import C2 from './C2';

const { Header, Content } = Layout;

function App() {
  return (
    <MyProvider>
      <Layout className="layout">
        <Header>
          <div className="logo">Logo</div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Row>
            <Col span={12}>
              <Card title="Child 1">
                <C1 />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Child 2">
                <C2 />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </MyProvider>
  );
}

export default App;
