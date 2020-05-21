import React from "react";
import { Row, Col } from "antd";
import car from "../static/images/car.jpg";

const Home = (props) => {
  return (
    <div className="jumbotron">
      <div className="container">
        <Row>
          <Col xxl={4} xl={5} lg={6} md={6}>
            <img src={car} alt="car" width="600" height="400" />
          </Col>
        </Row>
        <h1 className="display-4">Home</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <button className="btn btn-primary btn-lg">Learn more</button>
        </p>
      </div>
    </div>
  );
};

export default Home;
