import React, { Fragment, Component } from "react";
import { MyContext } from "./MyProvider";

class GC2 extends Component {
  render() {
    const { state } = this.context;
    const { name, age } = state;
    return (
      <Fragment>
        <p>GC2</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </Fragment>
    );
  }
}

GC2.contextType = MyContext;

export default GC2;
