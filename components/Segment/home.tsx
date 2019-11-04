import React, { Component } from "react";
import { navbarContainer } from "../../containers/navbar";
import Segment from ".";
import BgAnimation from "../Utils/BgAnimation";

type Props = {
  isVisible?: any;
};

export default class Home extends Component<Props> {
  render() {
    const { isVisible } = this.props;
    isVisible ? navbarContainer.show() : navbarContainer.hide();

    return (
      <Segment>
        <BgAnimation />
      </Segment>
    );
  }
}
