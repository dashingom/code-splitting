import React, { Component } from "react";
import enUS from "antd/es/locale/en_US";
import moment from "moment";

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "Onkar",
    age: 30,
    locale: enUS,
  };

  onIncrementAge = () => {
    const state = this.state;
    this.setState({
      ...state,
      age: state.age + 1,
    });
  };

  changeLocale = (e) => {
    const localeValue = e.target.value;
    this.setState({ locale: localeValue });
    if (!localeValue) {
      moment.locale("en");
    } else {
      moment.locale("zh-cn");
    }
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          onIncrementAge: this.onIncrementAge,
          changeLocale: this.changeLocale,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
