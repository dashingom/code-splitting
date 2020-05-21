import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Row, Col } from "antd";

const { Header } = Layout;

const NavBar = (props) => {
  return (
    <Header id="header">
      <Row>
        <Col xxl={4} xl={5} lg={6} md={6}>
          <h1>
            <a id="logo" rel="noopener noreferrer" href="/">
              <img
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
            </a>
          </h1>
        </Col>
        <Col className="menu-row" xxl={20} xl={19} lg={18} md={18}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/landing">Landing</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/hello">Hello</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="goodbye">Goodbye</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default NavBar;
