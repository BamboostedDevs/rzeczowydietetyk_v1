import dynamic from "next/dynamic";

import { StickyContainer } from "react-sticky";
import TrackVisibility from "react-on-screen";

import Layout from "../components/Layout";
import navbarContainer from "../containers/navbar";
import { Component } from "react";
import { Home, Info, Services, Contact } from "../components/Segment";
import { Subscribe } from "unstated";

const Header = dynamic(() => import("../components/Header"), {
  ssr: false
});

type State = {
  size: "false" | "large" | "medium" | "small";
};

export default class Main extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = { size: "false" };
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
  }
  render() {
    return (
      <Layout>
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
