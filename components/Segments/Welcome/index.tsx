import React, { Component } from "react";
import { Segment } from "..";
import { Image } from "react-bootstrap";
//@ts-ignore
import Bounce from "react-reveal/Bounce";
import navbarContainer from "../../../containers/navbar";
import { Subscribe } from "unstated";

export default class Welcome extends Component {
  render() {
    return (
      <Segment>
        <Subscribe to={[navbarContainer]}>
          {container => (
            <div id="welcome">
              <Image
                src="/images/cover.jpg"
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
                  Jestem dietetykiem klinicznym, zajmuję się doradztwem i
                  wsparciem żywieniowym pacjentów w trakcie leczenia, ale także
                  osób, które chcą zrobić coś dobrego dla swojego ciała,
                  zdrowia. Moim celem jest zwiększenie świadomości żywieniowej
                  oraz pomoc w podjęciu działań dotyczących zmiany nawyków
                  żywieniowych.
                </div>
              </Bounce>
            </div>
          )}
        </Subscribe>
        <style jsx>
          {`
            #welcome {
              font-size: 5vh;
              text-align: center;
              background-color: rgb(112, 182, 241);
            }
            .description {
              font-size: 2.75vh;
              margin-top: 7.5vh;
              margin-left: 2vw;
              margin-right: 2vw;
              font-family: Lato;
              padding-bottom: 5vh;
            }
          `}
        </style>
      </Segment>
    );
  }
}
