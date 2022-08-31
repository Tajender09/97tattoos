import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components/macro";
import Custom1 from "../Assets/Images/portfolio/custom1.jpg";
import Religious from "../Assets/Images/portfolio/religious2.jpg";
import Name from "../Assets/Images/portfolio/name.jpg";
import Pet from "../Assets/Images/portfolio/pet.jpg";
import Couple from "../Assets/Images/portfolio/couple.JPG";
import Custom2 from "../Assets/Images/portfolio/custom2.jpg";
import Custom3 from "../Assets/Images/portfolio/custom.jpg";
import Custom4 from "../Assets/Images/portfolio/custom4.jpg";
import Text from "../Assets/Images/portfolio/text.JPG";
import Religious2 from "../Assets/Images/portfolio/religious.JPG";
import Flower from "../Assets/Images/portfolio/flower.jpg";
import Flower2 from "../Assets/Images/portfolio/flower2.JPG";
import Flower3 from "../Assets/Images/portfolio/flower3.JPG";
import Pet2 from "../Assets/Images/portfolio/pet2.jpg";
import Custom5 from "../Assets/Images/portfolio/custom3.jpg";


const PortfolioView = () => {
  const projects = [
    {
        id: Math.random(),
        image: Custom1,
        name: "Animal Tattoo",
      },
      {
        id: Math.random(),
        image: Religious,
        name: "Religious Tattoo",
      },
      {
        id: Math.random(),
        image: Name,
        name: "Name Tattoo",
      },
      {
        id: Math.random(),
        image: Pet,
        name: "Pet Tattoo",
      },
      {
        id: Math.random(),
        image: Couple,
        name: "Couple Tattoo",
      },
      {
        id: Math.random(),
        image: Custom2,
        name: "Custom Tattoo",
      },
      {
        id: Math.random(),
        image: Custom3,
        name: "Custom Tattoo 2",
      },
      {
        id: Math.random(),
        image: Text,
        name: "Text Tattoo",
      },
      {
        id: Math.random(),
        image: Religious2,
        name: "Religious Tattoo 2",
      },
      {
        id: Math.random(),
        image: Flower,
        name: "Flower Tattoo",
      },
      {
        id: Math.random(),
        image: Pet2,
        name: "Pet Tattoo 2",
      },
      {
        id: Math.random(),
        image: Flower2,
        name: "Flower Tattoo 2",
      },
      {
        id: Math.random(),
        image: Custom4,
        name: "Custom Tattoo 3",
      },
      {
        id: Math.random(),
        image: Flower3,
        name: "Flower Tattoo 3",
      },
      {
        id: Math.random(),
        image: Custom5,
        name: "Custom Tattoo 4",
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
        PREVIOUS WORK
      </h1>
      <Row>
        {projects.map((item) => {
          return (
            <Col
              key={item.id}
              className="mt-5 mb-3"
              md={4}
            >
              <Image
                src={item.image}
                alt={item.name}
                css={`
                  width: 100%;
                  height: 100%;
                `}
                fluid
              />
              <ProductHeading>{item.name}</ProductHeading>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PortfolioView;

const ProductHeading = styled.h4`
  color: #777;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  margin-top: 10px;
`;