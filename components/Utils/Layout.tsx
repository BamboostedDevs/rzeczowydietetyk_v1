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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Abel&display=swap"
            rel="stylesheet"
          ></link>
          <meta
            name="Description"
            content="Blog, profesjonalne rady, informacje, umawianie wizyt (Okulickiego, Radom, Polska)"
          />
          <title>Rzeczowy Dietetyk</title>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#3d5194" />
        </Head>
        <Provider>{children}</Provider>
        <style jsx global>{``}</style>
      </div>
    );
  }
}
