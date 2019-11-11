import React, { Component } from "react";
import { Segment } from ".";
import { Image } from "react-bootstrap";
//@ts-ignore
import Bounce from "react-reveal/Bounce";
//@ts-ignore
import Zoom from "react-reveal/Zoom";
import navbarContainer from "../../containers/navbar";
import { Subscribe } from "unstated";

export default class Info extends Component {
  render() {
    return (
      <Segment>
        <Subscribe to={[navbarContainer]}>
          {container => (
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
              <Bounce
                when={
                  navbarContainer.state.size == "large"
                    ? navbarContainer.state.done
                    : undefined
                }
                duration={1500}
              >
                mgr Krzysztof Skuza
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Etiam dignissim diam quis enim lobortis scelerisque fermentum
                  dui. Et magnis dis parturient montes nascetur ridiculus mus
                  mauris vitae. Orci dapibus ultrices in iaculis nunc sed. Ac
                  turpis egestas integer eget aliquet nibh.
                </div>
              </Bounce>
            </div>
          )}
        </Subscribe>

        <style jsx>
          {`
            #info {
              font-size: 5vh;
              text-align: center;
            }
            .description {
              font-size: 2.75vh;
              margin-top: 7.5vh;
              margin-left: 2vw;
              margin-right: 2vw;
              font-family: Raleway;
            }
          `}
        </style>
      </Segment>
    );
  }
}
