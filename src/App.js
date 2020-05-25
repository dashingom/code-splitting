import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyProvider from "./MyProvider";
import "./App.css";
import "./sass/app.scss";
import { Layout } from "antd";
import LoadManager from "./utils/LoadManager";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer1 from "./components/Footer";

const { Content, Footer } = Layout;

const AsyncLanding = LoadManager(() =>
  import("./components/context-demo/Landing")
);
const AsyncHelloWorld = LoadManager(() => import("./components/HelloWorld"));
const AsyncGoodnightMoon = LoadManager(() =>
  import("./components/GoodnightMoon")
);

function App() {
  return (
    <MyProvider>
      <Router>
        <Layout className="layout">
          <NavBar />
          <Content style={{ padding: "0 50px" }}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Suspense fallback={<div>Loading...</div>}>
                <Route path="/landing" component={AsyncLanding} exact />
                <Route path="/hello" component={AsyncHelloWorld} exact />
                <Route path="/goodbye" component={AsyncGoodnightMoon} exact />
              </Suspense>
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
