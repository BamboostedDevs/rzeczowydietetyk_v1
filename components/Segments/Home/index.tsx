import React, { Component } from "react";
import navbarContainer from "../../../containers/navbar";
import { Segment } from "..";
import Large from "./Large";
import Small from "./Small";

type Props = {
  isVisible?: any;
  size: "large" | "medium" | "small" | "false";
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
    const { isVisible, size } = this.props;
    isVisible ? navbarContainer.show() : navbarContainer.hide();
    return (
      <Segment>
        <div style={{ backgroundColor: "rgb(112,182,241)" }}>
          {size == "large" ? <Large /> : <Small />}
          <style jsx>
            {`
              #home {
                font-size: 5vh;
                text-align: center;
                background-color: rgb(112, 182, 241);
              }
            `}
          </style>
        </div>
      </Segment>
    );
  }
}
