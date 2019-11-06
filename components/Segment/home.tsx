import React, { Component } from "react";
import navbarContainer from "../../containers/navbar";
import Segment from ".";
import BgAnimation from "../Utils/BgAnimation";
import { Col, Row, Container } from "react-bootstrap";
import { MagicSpinner } from "react-spinners-kit";
import Info from "./info";

type Props = {
  isVisible?: any;
};
type State = {
  height?: number;
  width?: number;
};

export default class Home extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var size: "large" | "medium" | "small";
    const height = window.innerHeight;
    const width = window.innerWidth;
    if (height - width < 0) {
      size = "large";
    } else if (height - width > 200 && height < 800) {
      size = "small";
    } else {
      size = "medium";
    }
    navbarContainer.changeSize(size) && navbarContainer.allow();
    console.log(size);
  }
  render() {
    const { isVisible } = this.props;
    isVisible ? navbarContainer.show() : navbarContainer.hide();
    return (
      <Segment>
        {navbarContainer.state.size == "large" ? (
          <div className="row" id="home">
            <div className="left header">
              <BgAnimation />
              <Container style={{ marginTop: "20vh", marginLeft: "5vw" }}>
                <Row>
                  <Col style={{ flexGrow: "unset", marginRight: "1vw" }}>
                    <Row />
                    <Row>
                      <img
                        alt=""
                        src="https://images.vexels.com/media/users/3/143057/isolated/preview/b96fb3ff9a11216da3f124e69f9e377e-avocado-color-flat-icon-by-vexels.png"
                        className="d-inline-block align-center"
                        style={{
                          height: "17rem",
                          width: "auto"
                        }}
                      />
                    </Row>
                    <Row />
                  </Col>
                  <Col className="no-select">
                    <Row>Rzeczowy </Row>
                    <Row>Dietetyk</Row>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="right">
              <Info />
            </div>
          </div>
        ) : navbarContainer.state.size == "medium" ? (
          <div style={{ maxHeight: "100vh", width: "100vw" }} id="home">
            <BgAnimation />
            <Container
              style={{
                marginTop: "10vh",
                marginLeft: "7.5vw",
                position: "absolute",
                fontFamily: "Abel",
                fontSize: "8vw",
                minWidth: "0vh",
                maxWidth: "80vw"
              }}
            >
              <Row>
                <Col style={{ marginRight: "1vw" }}>
                  <Row />
                  <Row>
                    <img
                      alt=""
                      src="https://images.vexels.com/media/users/3/143057/isolated/preview/b96fb3ff9a11216da3f124e69f9e377e-avocado-color-flat-icon-by-vexels.png"
                      className="d-inline-block align-center"
                      style={{
                        height: "11.5rem",
                        width: "auto"
                      }}
                    />
                  </Row>
                  <Row />
                </Col>
                <Col className="no-select">
                  <Row>Rzeczowy </Row>
                  <Row>Dietetyk</Row>
                </Col>
                <Col />
              </Row>
            </Container>
          </div>
        ) : navbarContainer.state.size == "small" ? (
          <div style={{ maxHeight: "100vh", width: "100vw" }} id="home">
            <BgAnimation />
            <Container
              style={{
                marginTop: "10vh",
                marginLeft: "7.5vw",
                position: "absolute",
                fontFamily: "Abel",
                fontSize: "10vw",
                minWidth: "0vh",
                maxWidth: "80vw"
              }}
            >
              <Row>
                <Col style={{ marginRight: "1vw" }}>
                  <Row />
                  <Row>
                    <img
                      alt=""
                      src="https://images.vexels.com/media/users/3/143057/isolated/preview/b96fb3ff9a11216da3f124e69f9e377e-avocado-color-flat-icon-by-vexels.png"
                      className="d-inline-block align-center"
                      style={{
                        height: "7rem",
                        width: "auto"
                      }}
                    />
                  </Row>
                  <Row />
                </Col>
                <Col className="no-select">
                  <Row>Rzeczowy </Row>
                  <Row>Dietetyk</Row>
                </Col>
                <Col />
              </Row>
            </Container>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "rgb(73, 158, 249)",
              width: "100%",
              height: "100%"
            }}
            id="home"
          >
            <div className="loader">
              <MagicSpinner color="rgba(255,255,255, 0.9)" size={200} />
            </div>
          </div>
        )}
        <style jsx>{`
          .row {
            display: flex;
            width: 100%;
          }

          .left {
            flex: 70%;
          }

          .header {
            font-size: 10vh;
            font-family: "Abel";
          }

          .right {
            flex: 30%;
          }

          .loader {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }
        `}</style>
      </Segment>
    );
  }
}
