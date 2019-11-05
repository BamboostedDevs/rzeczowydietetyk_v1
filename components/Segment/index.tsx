import React, { Component } from "react";

type Props = {
  children?: any;
};

export default class Segment extends Component<Props> {
  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          maxWidth: "100vw",
          maxHeight: "100vh"
        }}
      >
        {children}
      </div>
    );
  }
}
