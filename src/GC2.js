import React, { useContext } from 'react'

import { MyContext } from './MyProvider'

function GC2() {
  const { state } = useContext(MyContext);
  const { name, age, } = state;
  return (
    <div>
      <p>GC2</p>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

export default GC2
