import React, { Component } from "react";
import { Segment } from ".";
import { Image } from "react-bootstrap";
//@ts-ignore
import Bounce from "react-reveal/Bounce";
//@ts-ignore
import Zoom from "react-reveal/Zoom";

export default class Info extends Component {
  render() {
    return (
      <Segment>
        <div id="info">
          <Image
            src="/vegetables.jpg"
            style={{
              width: "20vh",
              height: "20vh",
              marginBottom: "3vh",
              marginTop: "10vh"
            }}
            roundedCircle
          />
          <br />
          <Bounce cascade>mgr Krzysztof Skuza</Bounce>
          <div className="description">
            <Zoom bottom cascade>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam
              dignissim diam quis enim lobortis scelerisque fermentum dui. Et
              magnis dis parturient montes nascetur ridiculus mus mauris vitae.
              Orci dapibus ultrices in iaculis nunc sed. Ac turpis egestas
              integer eget aliquet nibh.
            </Zoom>
          </div>
        </div>
        <style jsx>
          {`
            #info {
              font-size: 5vh;
              text-align: center;
            }
            .description {
              font-size: 3vh;
              margin-top: 7.5vh;
              margin-left: 2vw;
              margin-right: 2vw;
            }
          `}
        </style>
      </Segment>
    );
  }
}
