import React, { useState } from "react";
import vid from "../../Assets/Videos/vid.mp4";
import styled from "styled-components/macro";
import { Col, Row, Button } from "react-bootstrap";
import ConsultationModal from "../ConsultationModal";

const Intro = () => {
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(0);
  const modalHandler = () => {
    setShow(true);
    setNum(Math.random());
  };
  return (
    <>
      <Row className="justify-content-between align-items-center my-5">
        <Col md={5}>
          <p
            css={`
              font-size: 3rem;
              font-family: "Poppins", sans-serif;
              line-height: 62px;
            `}
          >
            <span
              css={`
                font-weight: bolder !important;
              `}
            >
              97 Tattoos
            </span>
            <br />
            Get best deals on{" "}
            <span
              css={`
                font-weight: bolder !important;
              `}
            >
              customized tattoos!
            </span>
          </p>
          <Button
            className="px-4 py-2 mt-3 mb-5"
            variant="outline-dark"
            onClick={modalHandler}
          >
            Checkout More
          </Button>
        </Col>
        <Col md={7}>
          <VideoHolder>
            <video
              css={`
                border-radius: 25px;
                width: 100%;
              `}
              autoPlay={true}
              muted={true}
              playsInline={true}
              loop={true}
              src={vid}
            />
          </VideoHolder>
        </Col>
      </Row>
      <ConsultationModal show={show} num={num} />
    </>
  );
};

export default Intro;

const VideoHolder = styled.div`
  position: relative;

  :after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    border-radius: 25px;
    opacity: 0.2;
  }
`;
