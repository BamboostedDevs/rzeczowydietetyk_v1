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
            <img
              alt="mountains"
              style={{ left: 0 }}
              src={require("../../../public/images/mountains.svg")}
            />
          </Slide>
          {navbarContainer.state.size &&
            navbarContainer.state.size != "large" && (
              <div
                style={{ height: "10vh", backgroundColor: "rgb(247,163,62)" }}
              />
            )}
          {/* <Footer/> */}
        </div>
        <style jsx>{`
          .contact {
            background-image: linear-gradient(
              rgba(220, 250, 221, 1) 0%,
              rgba(112, 182, 241, 1) 75%,
              rgba(112, 182, 241, 1) 100%
            );
          }
        `}</style>
      </Segment>
    );
  }
}
