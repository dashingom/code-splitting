import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import MyProvider from "./MyProvider";
import "./App.css";
import "./sass/app.scss";
import { Layout } from "antd";

import NavBar from "./components/NavBar";
import Footer1 from "./components/Footer";

const { Content, Footer } = Layout;

const AsyncLanding = Loadable({
  loader: () => import("./Landing"),
  loading() {
    return <div>Loading...</div>;
  },
});
const AsyncHome = Loadable({
  loader: () => import("./components/Home"),
  loading() {
    return <div>Loading...</div>;
  },
});
const AsyncHelloWorld = Loadable({
  loader: () => import("./components/HelloWorld"),
  loading() {
    return <div>Loading...</div>;
  },
});
const AsyncGoodnightMoon = Loadable({
  loader: () => import("./components/GoodnightMoon"),
  loading() {
    return <div>Loading...</div>;
  },
});

function App() {
  return (
    <MyProvider>
      <Router>
        <Layout className="layout">
          <NavBar />
          <Content style={{ padding: "0 50px" }}>
            <Switch>
              <Route path="/" component={AsyncHome} exact />
              <Route path="/landing" component={AsyncLanding} exact />
              <Route path="/hello" component={AsyncHelloWorld} exact />
              <Route path="/goodbye" component={AsyncGoodnightMoon} exact />
            </Switch>
          </Content>
          <Footer>
            <Footer1 />
          </Footer>
        </Layout>
      </Router>
    </MyProvider>
  );
}

export default App;
