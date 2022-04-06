import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComponent from "./RegularComponent";

export default class App extends Component {
  state = {
    name: "Shivani",
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Shivani" });
    }, 15000);
    console.log("Component mounted");
  }
  render() {
    console.log("UI rendered from parent");
    return (
      <div>
        App
        <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}
