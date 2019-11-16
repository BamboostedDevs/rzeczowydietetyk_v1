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
              rgba(220, 250, 221, 1) 0%,
              rgba(220, 250, 221, 0.75) 7.5%,
              rgba(220, 250, 221, 0.5) 15%,
              rgba(112, 182, 241, 0.75) 60%,
              rgba(112, 182, 241, 1) 100%
            );
          }
        `}</style>
      </Segment>
    );
  }
}
