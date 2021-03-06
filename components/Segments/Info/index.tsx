import React, { Component } from "react";
import navbarContainer from "../../../containers/navbar";
import Large from "./Large";
import Small from "./Small";

export default class Info extends Component {
  render() {
    return (
      <div
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
