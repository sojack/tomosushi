import React from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";

import styled from "styled-components";
import "normalize.css";
import GlobalStyles from "./globalStyles";

const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-color: var(--background-color);
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
