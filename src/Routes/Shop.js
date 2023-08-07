import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Tabs, Tab } from "react-bootstrap";
import styled from "styled-components/macro";
import large from "../Assets/Images/products/large.jpg";
import small from "../Assets/Images/products/small.jpg";
import ConsultationModal from "../components/ConsultationModal";

const Shop = () => {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState({ details: {}, show: false });
  const [num, setNum] = useState(0);

  const modalHandler = () => {
    setTimeout(() => {
      setShow(true);
      setNum(Math.random());
    }, 1000);
  };

  const products = [
    {
      id: Math.random(),
      name: "Tattoo Butter Large",
      image: large,
      price: "₹799",
      ingredients: [
        "beeswax",
        "cocoa butter",
        "jojoba oil",
        "coconut oil",
        "sweet almond oil",
        "olive oil",
        "lavender oil",
        "tea tree oil",
      ],
      weight: "50gm / 1.76oz",
    },
    {
      id: Math.random(),
      name: "Tattoo Butter Small",
      image: small,
      price: "₹499",
      ingredients: [
        "beeswax",
        "cocoa butter",
        "jojoba oil",
        "coconut oil",
        "sweet almond oil",
        "olive oil",
        "lavender oil",
        "tea tree oil",
      ],
      weight: "05oz / 15ml",
    },
  ];
  return (
    <Container className="text-center mb-5">
      <h1
        css={`
          font-size: 32px;
          line-height: 44px;
          letter-spacing: 19px;
          font-family: "Nunito";
          font-weight: bolder;
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
                  onClick={() => setShowDetails({ show: true, details: item })}
                >
                  See Details
                </Button>
              </div>
              <ProductHeading>{item.name}</ProductHeading>
              <ProductPrice>{item.price}</ProductPrice>
            </Col>
          );
        })}
      </Row>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showDetails.show}
        onHide={() => setShowDetails({ details: {}, show: false })}
        css={`
          font-family: poppins;
        `}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            css={`
              font-weight: bolder;
            `}
          >
            {showDetails.details?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            variant="tabs"
            defaultActiveKey="description"
            css={`
              text-transform: uppercase;
              font-weight: bolder;

              .nav-link {
                color: grey;
              }
            `}
          >
            <Tab eventKey="description" title="Description">
              <p className="mt-3 mb-0">
                <span className="fw-bold">Weight : </span>
                {showDetails.details?.weight}
              </p>
              <p className="mb-0">
                <span className="fw-bold">Price : </span>
                {showDetails.details?.price}
              </p>
              <p>For More Details Please Consult With Tattoo Artist.</p>
            </Tab>
            <Tab eventKey="ingredients" title="Ingredients">
              <ul className="mt-3">
                {showDetails.details?.ingredients?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      css={`
                        font-size: 14px;
                        text-transform: uppercase;
                      `}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-dark"
            onClick={() => {
              setShowDetails({ details: {}, show: false });
              modalHandler();
            }}
          >
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
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
