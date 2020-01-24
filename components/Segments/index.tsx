import React, { Component } from "react";
import Home from "./Home";
import Welcome from "./Welcome";
import Loading from "../Utils/Loading";
import Info from "./Info";
import Contact from "./Contact";

type Props = {
  children?: object;
};

class Segment extends Component<Props> {
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

export { Home, Welcome, Loading, Info, Contact, Segment };
