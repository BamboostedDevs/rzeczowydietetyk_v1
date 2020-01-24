import "bootstrap-css-only/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
