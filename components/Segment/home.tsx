import React, { Component } from "react";
import { navbarContainer } from "../../containers/navbar";
import Segment from ".";
import BgAnimation from "../Utils/BgAnimation";
import { Col, Row, Container } from "react-bootstrap";

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
    this.setState({ height: window.innerHeight, width: window.innerWidth });
  }
  render() {
    const { isVisible } = this.props;
    isVisible ? navbarContainer.show() : navbarContainer.hide();

    console.log("height: ", this.state.height, "width: ", this.state.width);
    this.state.height &&
      this.state.width &&
      console.log("Height - Width: ", this.state.height - this.state.width);

    return (
      <Segment>
        {this.state.height &&
        this.state.width &&
        this.state.height - this.state.width < 0 ? (
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
                  <Col>
                    <Row>Rzeczowy </Row>
                    <Row>Dietetyk</Row>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="right"></div>
          </div>
        ) : this.state.height &&
          this.state.width &&
          this.state.height - this.state.width > 300 &&
          this.state.height < 800 ? (
          <div style={{ maxHeight: "100vh" }}>
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
                <Col>
                  <Row>Rzeczowy </Row>
                  <Row>Dietetyk</Row>
                </Col>
                <Col />
              </Row>
            </Container>
          </div>
        ) : (
          <div style={{ maxHeight: "100vh" }}>
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
                <Col>
                  <Row>Rzeczowy </Row>
                  <Row>Dietetyk B</Row>
                </Col>
                <Col />
              </Row>
            </Container>
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
        `}</style>
      </Segment>
    );
  }
}
