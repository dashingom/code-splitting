import React, { Fragment, useContext } from 'react'
import { MyContext } from './MyProvider'

import { Button } from 'antd';

function GC1() {
  const { state, onIncrementAge } = useContext(MyContext);
  const { name, age, } = state;
  return (
    <Fragment>
      <p>GC1</p>
      <p>{name}</p>
      <p>{age}</p>
      <Button type="primary" onClick={onIncrementAge}>Increment</Button>
    </Fragment>
  )
}

export default GC1
