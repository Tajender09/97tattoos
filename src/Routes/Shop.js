import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components/macro";
import large from "../Assets/Images/products/large.jpg";
import small from "../Assets/Images/products/small.jpg";

const Shop = () => {
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
              <img
                src={item.image}
                alt={item.name}
                css={`
                  width: 100%;
                  height: 100%;
                  border-radius: 25px; 
                `}
              />
              <ProductHeading>{item.name}</ProductHeading>
              <ProductPrice>{item.price}</ProductPrice>
            </Col>
          );
        })}
      </Row>
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
