import React, { Component } from "react";
import BgAnimation from "./BgAnimation";
import { Col, Container, Row } from "react-bootstrap";
import shuffle from "shuffle-array";
import {
  CubeSpinner,
  HeartSpinner,
  WaveSpinner,
  BallSpinner,
  MagicSpinner,
  SwishSpinner,
  CombSpinner,
  DominoSpinner,
  FlapperSpinner,
  HoopSpinner,
  SpiralSpinner,
  FireworkSpinner,
  TraceSpinner,
  PongSpinner
} from "react-spinners-kit";

export default class PageIsBeingCreated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinners: [
        // @ts-ignore
        <DominoSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <HeartSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <CubeSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <BallSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <WaveSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <MagicSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <SwishSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <CombSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <FlapperSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <HoopSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <SpiralSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <FireworkSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <TraceSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />,
        // @ts-ignore
        <PongSpinner
          color="rgba(255,255,255, 0.9)"
          frontColor="rgba(255,255,255, 0.9)"
          backColor="rgba(119,136,153,0.7)"
        />
      ],
      interval: false,
      now: 0
    };
  }
  componentDidMount() {
    shuffle(this.state.spinners);
    this.setState({
      interval: setInterval(() => {
        this.state.now < this.state.spinners.length - 1
          ? this.setState({ now: this.state.now + 1 })
          : this.setState({ now: 0 });
      }, 10000)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <div>
        <BgAnimation />
        <Container
          style={{
            marginTop: "20vh",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <h1
            style={{
              color: "white",
              fontFamily: "Allerta Stencil",
              fontSize: "5vh"
            }}
          >
            Strona w trakcie tworzenia
          </h1>
        </Container>
        <Container
          style={{
            marginTop: "50vh",
            position: "absolute",
            left: "50%",
            right: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Row className="justify-content-md-center">
            <Col />
            <Col className="loader">
              <Row className="justify-content-md-center">
                <Col />
                <Col style={{ display: "flex", justifyContent: "center" }}>
                  {this.state.spinners[this.state.now]}
                </Col>
                <Col />
              </Row>
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}
