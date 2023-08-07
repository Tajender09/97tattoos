import React, { useState, useEffect } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "styled-components/macro";
import ConsultationModal from "../ConsultationModal";

const Category = () => {
  const { name } = useParams();
  const [category, setCategory] = useState([]);

  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);

  const modalHandler = () => {
    setShow(true);
    setNum(Math.random());
  };

  // Geomatric Category
  // The popularity of the geometric tattoo is not a mere trend thing – these tattoos hold great behind behind the simple lines and shapes. These tattoos only look simple, even though their composition holds great beauty. Geometric tattoos draw their simplicity from the use of common shapes – lines, circles squares, triangles. However, these simple shapes joint together form beautiful and intricate patterns that adorn so many tattoo lovers around the world.

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
    ],
  };
  useEffect(() => {
    fetch(
      "https://tattoos-aeb9f-default-rtdb.asia-southeast1.firebasedatabase.app/categories.json"
    )
      .then((res) => res.json())
      .then((resp) =>
        setCategory(resp.filter((item) => item.name === name)[0])
      );
  }, [name]);
  // https://i.postimg.cc/d3LX2VPW/IMG-8733.jpg
  // https://i.postimg.cc/VkhfYNKF/IMG-1811.jpg
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Slider
            {...settings}
            css={`
              .slick-list {
                margin: 0 -5px;
              }
              .slick-slide > div {
                padding: 0 5px;
              }
            `}
          >
            {category?.images?.map((item, index) => {
              return (
                <div
                  css={`
                    border-radius: 25px;
                  `}
                  key={index}
                >
                  <Image
                    css={`
                      border-radius: 25px;
                    `}
                    src={item}
                    alt={name}
                    className="w-100"
                    fluid
                  />
                </div>
              );
            })}
          </Slider>
        </Col>
        <Col md={1} className="my-4" />
        <Col md={5}>
          <p
            css={`
              font-family: "Poppins", sans-serif;
              font-size: 50px;
              @media (max-width: 480px) {
                font-size: 25px;
              }
            `}
          >
            Get the best deals on <span className="fw-bold">{name}</span>!
          </p>
          <p
            css={`
              font-family: "Poppins", sans-serif;
              font-size: 16px;
              color: grey;
            `}
          >
            {category?.description}
          </p>
          <Button variant="outline-dark" onClick={modalHandler}>
            Checkout
          </Button>
        </Col>
      </Row>
      <ConsultationModal show={show} num={num} />
    </Container>
  );
};

export default Category;
