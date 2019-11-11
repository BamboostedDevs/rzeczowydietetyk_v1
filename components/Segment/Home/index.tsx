import React, { Component } from "react";
import navbarContainer from "../../../containers/navbar";
import BgAnimation from "../../Utils/BgAnimation";
import { Segment } from "../";
import Loading from "../../Utils/Loading";
import { Col, Row, Container } from "react-bootstrap";
import Large from "./Large";
import Medium from "./Medium";
import Small from "./Small";

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

  render() {
    const { isVisible } = this.props;
    isVisible ? navbarContainer.show() : navbarContainer.hide();
    return (
      <Segment>
        {navbarContainer.state.size == "large" ? (
          <Large />
        ) : navbarContainer.state.size == "medium" ? (
          <Medium />
        ) : navbarContainer.state.size == "small" ? (
          <Small />
        ) : (
          <div />
        )}
      </Segment>
    );
  }
}
