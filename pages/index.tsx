import { NextPage } from "next";
import Layout from "../components/Layout";
import { Grow } from "@material-ui/core";
import PageIsBeingCreated from "../components/PageIsBeingCreated";

const Home: NextPage = () => (
  <Layout>
    <Grow in={true}>
      <PageIsBeingCreated />
    </Grow>
  </Layout>
);

export default Home;
