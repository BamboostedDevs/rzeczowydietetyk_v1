import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "../fonts";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <div style={{ display: "none" }}>
        <img src="/images/og.png" />
        <img src="/images/avocadoT.svg" />
        <img src="/images/cover.jpg" />
        <img src="/images/office_web.jpg" />
        <img src="/images/office_mobile.jpg" />
        <img src="/images/owocnewarzywa.svg" />
        <img src="/images/owocnewarzywa_mobile.svg" />
        <img src="/images/tanita_web.jpg" />
        <img src="/images/tanita_mobile.jpg" />
      </div>
    </Layout>
  );
}
