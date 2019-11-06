import { NextPage } from "next";
import dynamic from "next/dynamic";

import { StickyContainer, Sticky } from "react-sticky";
import TrackVisibility from "react-on-screen";

import Home from "../components/Segment/home";
import Info from "../components/Segment/info";
import Services from "../components/Segment/services";
import Contact from "../components/Segment/contact";

import Layout from "../components/Utils/Layout";
import navbarContainer from "../containers/navbar";

const Header = dynamic(() => import("../components/Header"), {
  ssr: false
});

const Main: NextPage = () => (
  <Layout>
    <TrackVisibility partialVisibility>
      <Home />
    </TrackVisibility>
    <StickyContainer>
      <Header />
      {!(navbarContainer.state.size == "large") && <Info />}
      <Services />
      <Contact />
    </StickyContainer>
  </Layout>
);

export default Main;
