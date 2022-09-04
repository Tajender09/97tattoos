import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
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
        <Col md={4} css={`height: 600px;`}>
          <Image
            className="w-100"
            src="https://i.postimg.cc/N0Fxxh4k/3-CA0-F547-B2-CC-4-D88-B3-CF-8-D7-E19-C1-C8-A3.jpg"
            style={{ height: "500px", border: "2px solid black", borderRadius: "25px" }}
            alt="Offer"
            fluid
          />
          <Button variant="outline-dark my-4 d-block mx-auto">Checkout</Button>
        </Col>
        <Col md={4} css={`height: 600px;`}>
          <Image
            className="w-100"
            src="https://i.postimg.cc/yNkDnYz8/IMG-8741.jpg"
            style={{ height: "500px", border: "2px solid black", borderRadius: "25px", transform: "rotate(180deg)" }}
            alt="Offer"
            fluid
          />
          <Button variant="outline-dark my-4 d-block mx-auto">Checkout</Button>
        </Col>
        <Col md={4} css={`height: 600px;`}>
          <Image
            className="w-100"
            src="https://i.postimg.cc/V6Nd31Td/IMG-3786.jpg"
            style={{ height: "500px", border: "2px solid black", borderRadius: "25px" }}
            alt="Offer"
            fluid
          />
          <Button variant="outline-dark my-4 d-block mx-auto">Checkout</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Offers;
