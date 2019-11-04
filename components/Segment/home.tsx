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
        <div className="row" id="home">
          <div className="left">
            <BgAnimation />
          </div>
          <div className="right"></div>
        </div>
        <style jsx>{`
          .row {
            display: flex;
            width: 100%;
          }

          .left {
            flex: 70%;
          }

          .right {
            flex: 30%;
          }
        `}</style>
      </Segment>
    );
  }
}
