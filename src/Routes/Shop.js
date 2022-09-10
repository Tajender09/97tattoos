import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components/macro";
import large from "../Assets/Images/products/large.jpg";
import small from "../Assets/Images/products/small.jpg";
import ConsultationModal from "../components/ConsultationModal";

const Shop = () => {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);
  
  const modalHandler = () => {
    setShow(true);
    setNum(Math.random());
  };

  const products = [
    {
      id: Math.random(),
      name: "Tattoo Butter Large",
      image: large,
      price: "₹799",
    },
    {
      id: Math.random(),
      name: "Tattoo Butter Small",
      image: small,
      price: "₹499",
    },
  ];
  return (
    <Container className="text-center mb-5">
      <h1
        css={`
          font-size: 32px;
          line-height: 44px;
          letter-spacing: 19px;
        `}
      >
        SHOP
      </h1>
      <Row>
        {products.map((item) => {
          return (
            <Col
              key={item.id}
              className="my-5"
              css={`
                height: 400px;
              `}
              md={4}
            >
              <div
                css={`
                  position: relative;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  overflow: hidden;
                  :before {
                    content: "";
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0;
                    left: 0;
                    border-radius: 25px;
                    background-color: white;
                    opacity: 0;
                    transition: opacity 0.4s;
                  }
                  :hover:before {
                    opacity: 0.2;
                  }
                  :hover button {
                    margin-top: 0;
                  }
                `}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  css={`
                    width: 100%;
                    height: 100%;
                    border-radius: 25px;
                  `}
                />
                <Button
                  variant="dark"
                  css={`
                    margin-top: 30rem;
                    position: absolute;
                    transition: margin 0.5s;
                  `}
                  onClick={modalHandler}
                >
                  Checkout
                </Button>
              </div>
              <ProductHeading>{item.name}</ProductHeading>
              <ProductPrice>{item.price}</ProductPrice>
            </Col>
          );
        })}
      </Row>
      <ConsultationModal show={show} num={num} />
    </Container>
  );
};

export default Shop;

const ProductHeading = styled.h4`
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  margin-top: 10px;
  color: black;
`;
const ProductPrice = styled.h4`
  font-size: 18px;
  line-height: 20px;
  text-transform: none;
  font-family: Lekton, sans-serif;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0px;
  text-align: center;
`;
