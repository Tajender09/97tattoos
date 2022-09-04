import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://tattoos-aeb9f-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json"
    )
      .then((res) => res.json())
      .then((resp) => setCategories(resp));
  }, []);
  return (
    <Container className="text-center mb-5">
      <h1
        css={`
          font-size: 32px;
          line-height: 44px;
          letter-spacing: 19px;

          @media (max-width: 400px) {
            letter-spacing: 12px;
          }
        `}
      >
        CATEGORIES
      </h1>
      <Row>
        {categories.map((item, index) => {
          return (
            <Col
              key={index}
              className="my-5"
              css={`
                height: 400px;
              `}
              md={4}
            >
              <Link to={`/categories=${item.name}`} css={`text-decoration: none !important;`}>
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  css={`
                    width: 100%;
                    height: 100%;
                    border-radius: 25px;
                  `}
                  fluid
                />
                <ProductHeading>{item.name}</ProductHeading>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Categories;

const ProductHeading = styled.h4`
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  margin-top: 10px;
  color: black;
`;