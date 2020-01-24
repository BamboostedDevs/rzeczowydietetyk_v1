import React, { PureComponent } from "react";
import { Provider, Subscribe } from "unstated";
import navbarContainer from "../../containers/navbar";
import Head from "next/head";

type Props = {
  children: object;
};

export default class Layout extends PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <>
        <Head>
          <title>
            Rzeczowy Dietetyk - Kontakt, blog, info - RzeczowyDietetyk, Radom
          </title>
        </Head>
        <Provider>
          <Subscribe to={[navbarContainer]}>{container => children}</Subscribe>
          <script src="/scripts/three.r92.min.js" />
          <script src="/scripts/vanta.birds.min.js" />
        </Provider>
        <style jsx global>{`
          body {
            background-color: rgba(187, 246, 189, 0.5);
            font-family: Abel;
          }
          img {
            pointer-events: none;
            cursor: default;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .no-select {
            pointer-events: none;
            cursor: default;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        `}</style>
      </>
    );
  }
}
