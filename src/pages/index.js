import * as React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import SEO from "../components/seo";
import Layout from "../components/layout";
import styled from "styled-components";

const MyLayout = styled.div`
  height: 100vh;
  width: 100vw;
`;

const IndexPage = () => {
  return (
    <Layout>
      <MyLayout>
        <Header />
        <SEO title="menu" />
        <ul>
          <li>
            <Link to="/menu">Richmond Hill menu</Link>
          </li>
          <li>
            <Link to="/menu-mg">Mississauga menu</Link>
          </li>
        </ul>
      </MyLayout>
    </Layout>
  );
};

export default IndexPage;
