import React, { Component } from "react";

export default class RegularComponent extends Component {
  render() {
    console.log("UI rendered from regular");
    return <div>RegularComponent {this.props.name}</div>;
  }
}
