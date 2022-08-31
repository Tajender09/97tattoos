import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "styled-components/macro";

const Offers = () => {
  return (
    <div>
      <p
        className="text-center my-5"
        css={`
          font-size: 2.5rem;
          font-family: "Poppins", sans-serif;
          font-weight: bold;
        `}
      >
        Offers You Can't Resist!
      </p>
      <Row className="justify-content-around">
        <Col md={4}>
          <img
            className="w-100"
            src="https://static.wixstatic.com/media/c0874e_b8091e954f3847fe81ec2e2b7759bd4c~mv2.jpg/v1/fill/w_435,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/square-05-min.jpg"
            style={{ border: "2px solid black", borderRadius: "25px" }}
            alt="Offer"
          />
          <Button variant="outline-dark my-4 d-block mx-auto">Checkout</Button>
        </Col>
        <Col md={4}>
          <img
            className="w-100"
            src="https://static.wixstatic.com/media/c0874e_457b040678874ab6ad27a97f611d9ced~mv2.jpg/v1/fill/w_435,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/square-03-min.jpg"
            style={{ border: "2px solid black", borderRadius: "25px" }}
            alt="Offer"
          />
          <Button variant="outline-dark my-4 d-block mx-auto">Checkout</Button>
        </Col>
        <Col md={4}>
          <img
            className="w-100"
            src="https://static.wixstatic.com/media/c0874e_79f670247649487e84305a1fa37be277~mv2.jpg/v1/fill/w_435,h_435,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/square-02-min.jpg"
            style={{ border: "2px solid black", borderRadius: "25px" }}
            alt="Offer"
          />
          <Button variant="outline-dark my-4 d-block mx-auto">Checkout</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Offers;
