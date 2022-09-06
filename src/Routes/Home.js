import React, { useState, useEffect } from "react";
import Intro from "../components/Intro";
import Offers from "../components/Offers";
import Portfolio from "../components/Portfolio";
import { Container } from "react-bootstrap";
import ConsultationModal from "../components/ConsultationModal";

const Home = () => {
  
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);
  useEffect(() => {
    setShow(true);
    setNum(Math.random());
  }, []);
  return (
    <Container>
      <Intro />
      <Offers />
      <Portfolio />
      <ConsultationModal show={show} num={num} />
    </Container>
  );
};

export default Home;
