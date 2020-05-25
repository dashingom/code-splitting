import React, { Fragment, Component } from "react";
import { MyContext } from "../../MyProvider";

import { Button } from "antd";

class GC1 extends Component {
  render() {
    const { state, onIncrementAge } = this.context;
    const { name, age } = state;
    return (
      <Fragment>
        <p>GC1</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <Button type="primary" onClick={onIncrementAge}>
          Increment
        </Button>
      </Fragment>
    );
  }
}

GC1.contextType = MyContext;

export default GC1;
