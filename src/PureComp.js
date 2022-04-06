import React, { PureComponent } from "react";

export default class PureComp extends PureComponent {
  render() {
    console.log("UI rendered from pure");
    return <div>PureComponent {this.props.name}</div>;
  }
}
