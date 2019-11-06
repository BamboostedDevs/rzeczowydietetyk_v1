import React, { Component } from "react";
import Segment from ".";

export default class Services extends Component {
  render() {
    return (
      <Segment>
        <div id="services"></div>
        <style jsx>{`
          #services {
            background: url(/vegetables.jpg) rgba(187, 246, 189, 0.5);
            background-size: cover;
            background-blend-mode: darken;
            width: 100%;
            height: 101%;
          }
        `}</style>
      </Segment>
    );
  }
}
