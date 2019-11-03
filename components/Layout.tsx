import React, { PureComponent } from "react";
import Head from "next/head";
import { Provider } from "unstated";
import "bootstrap-css-only/css/bootstrap.min.css";

export default class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Allerta Stencil"
            rel="stylesheet"
          />
          <meta
            name="Description"
            content="Oryginalna strona główna Rzeczowego Dietetyka (Radom, woj. Mazowieckie, Polska). Blog, profesjonalne rady, informacje oraz umawianie wizyt."
          />
          <title>Rzeczowy Dietetyk</title>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#3d5194" />
        </Head>
        <Provider>
          <div
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            {children}
          </div>
        </Provider>
        <style jsx global>{`
          body {
            margin: 0px;
          }
        `}</style>
      </div>
    );
  }
}
