import dynamic from "next/dynamic";

import { StickyContainer } from "react-sticky";
import TrackVisibility from "react-on-screen";

import Layout from "../components/Layout";
import navbarContainer from "../containers/navbar";
import { Component } from "react";
import { Home, Info, Services, Contact, Loading } from "../components/Segment";
import { Subscribe } from "unstated";

const Header = dynamic(() => import("../components/Header"), {
  ssr: false
});

type State = {
  size: "false" | "large" | "medium" | "small";
  done: boolean;
};

export default class Main extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = { size: "false", done: false };
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
    this.setState({ size: size });
    console.log(size);
    setTimeout(() => this.setState({ done: true }), 2000);
  }
  render() {
    return (
      <Layout>
        {!this.state.done && (
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
        )}
        <div>
          <TrackVisibility partialVisibility>
            <Home />
          </TrackVisibility>
          <StickyContainer>
            {this.state.size != "large" && this.state.size != "false" && (
              <Info />
            )}
            <Services />
            <Contact />
            <Subscribe to={[navbarContainer]}>
              {container => (
                <Header
                  render={!container.state.visible && container.state.allow}
                />
              )}
            </Subscribe>
          </StickyContainer>
        </div>
      </Layout>
    );
  }
}
