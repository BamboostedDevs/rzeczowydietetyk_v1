import React, { Component } from "react";
import { MagicSpinner } from "react-spinners-kit";

export default class Loading extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgb(112,182,241)",
          width: "100%",
          height: "100%"
        }}
        id="home"
      >
        <div className="loader">
          <MagicSpinner color="rgba(255,255,255, 0.9)" size={200} />
        </div>
        <style jsx>{`
          .loader {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }
        `}</style>
      </div>
    );
  }
}
