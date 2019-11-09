import React, { Component } from "react";
import Home from "./Home";
import Info from "./Info";
import Loading from "./Loading";
import Services from "./Services";
import Contact from "./Contact";

type Props = {
  children?: any;
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

export { Home, Info, Loading, Services, Contact, Segment };
