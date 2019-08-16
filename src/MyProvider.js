import React, { Component } from 'react'

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: 'Onkar',
    age: 30
  }

  onIncrementAge = () => {
    const state = this.state;
    this.setState({
      ...state,
      age: state.age + 1
    })
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        onIncrementAge: this.onIncrementAge
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider
