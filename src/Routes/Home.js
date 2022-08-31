import React from "react";
import Intro from "../components/Intro";
import Offers from "../components/Offers";
import Portfolio from "../components/Portfolio";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Intro />
      <Offers />
      <Portfolio />
    </Container>
  );
};

export default Home;
