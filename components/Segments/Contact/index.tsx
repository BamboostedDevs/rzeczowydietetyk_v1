import React, { Component } from "react";
import { Segment } from "..";
//@ts-ignore
import Slide from "react-reveal/Slide";
import Large from "./Large";
import navbarContainer from "../../../containers/navbar";
import Small from "./Small";

export default class Contact extends Component {
  render() {
    return (
      <Segment>
        <div className="contact">
          {navbarContainer.state.size == "large" ? <Large /> : <Small />}
          <Slide bottom>
            <img src="/mountains.svg" style={{ left: 0 }} />
          </Slide>
          {/* <Footer/> */}
        </div>
        <style jsx>{`
          .contact {
            background-image: linear-gradient(
              rgba(187, 246, 189, 0.5) 0%,
              rgba(112, 182, 241, 0.75) 60%,
              rgba(112, 182, 241, 1) 100%
            );
          }
        `}</style>
      </Segment>
    );
  }
}
