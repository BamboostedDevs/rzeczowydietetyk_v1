import React, { Component } from "react";
import navbarContainer from "../../../containers/navbar";
import Large from "./Large";
import Small from "./Small";

type State = {
  open?: boolean;
};

export default class Services extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div
        id="services"
        style={
          navbarContainer.state.size == "small"
            ? { fontSize: "2vh" }
            : { fontSize: "4.5vh" }
        }
      >
        {navbarContainer.state.size == "large" ? <Large /> : <Small />}
      </div>
    );
  }
}
