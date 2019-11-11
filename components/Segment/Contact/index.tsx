import React, { Component } from "react";
import { Segment } from "../";
//@ts-ignore
import Slide from "react-reveal/Slide";
import Large from "./Large";
import navbarContainer from "../../../containers/navbar";
import Small from "./Small";

export default class Contact extends Component {
  render() {
    return (
      <Segment>
        <div
          style={{
            backgroundColor: "rgba(187, 246, 189, 0.5)"
          }}
        >
          {navbarContainer.state.size == "large" ? <Large /> : <Small />}
          <Slide bottom>
            <img src="/mountains.svg" style={{ left: 0 }} />
          </Slide>
          {/* <Footer/> */}
        </div>
      </Segment>
    );
  }
}
