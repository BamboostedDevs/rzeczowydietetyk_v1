import dynamic from "next/dynamic";

import { StickyContainer } from "react-sticky";
//@ts-ignore
import IsVisible from "react-is-visible";

import navbarContainer from "../containers/navbar";
import { Component } from "react";
import { Home, Welcome, Info, Contact, Loading } from "../components/Segments";

const Header = dynamic(() => import("../components/Header"), {
  ssr: false
});

type State = {
  size: boolean | "large" | "medium" | "small";
  done: boolean;
  visible: boolean;
};

export default class Main extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = { size: false, done: false, visible: false };
  }

  componentDidMount() {
    var size: "large" | "medium" | "small";
    const height = window.innerHeight;
    const width = window.innerWidth;
    if (height - width < 0) {
      size = "large";
    } else if (height - width > 100 && height < 820) {
      size = "small";
    } else {
      size = "medium";
    }
    navbarContainer.changeSize(size) && navbarContainer.allow();
    this.setState({ size: size });
    setTimeout(() => {
      this.setState({ done: true });
      navbarContainer.setState({ done: true });
    }, 2000);
  }
  render() {
    return (
      <>
        {!this.state.done ? (
          <div
            style={{
              left: 0,
              top: 0,
              position: "fixed",
              height: "100vh",
              width: "100vw",
              zIndex: 999,
              backgroundColor: "rgb(112,182,241)",
              fill: "rgb(112,182,241)"
            }}
          >
            <Loading />
          </div>
        ) : (
          <div>
            <div style={{ backgroundColor: "rgb(112, 182, 241)" }}>
              <IsVisible partialVisibility>
                {(IsVisible: boolean) => {
                  IsVisible === this.state.visible &&
                    this.setState({ visible: !IsVisible });
                  return <Home size={this.state.size} />;
                }}
              </IsVisible>
            </div>
            <StickyContainer>
              {this.state.size && this.state.size != "large" && <Welcome />}
              <Info />
              <Contact />
              {this.state.visible && <Header render={this.state.visible} />}
            </StickyContainer>
          </div>
        )}
      </>
    );
  }
}
