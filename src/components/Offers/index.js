import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import "styled-components/macro";
import sqImage from "../../Assets/Images/square.jpg";

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
        <Col
          md={4}
          css={`
            height: 600px;

            @media (max-width: 768px) {
              margin-top: 20px;
            }
            @media (min-width: 768px) and (max-width: 991px) {
              padding-left: 0 !important;
              padding-right: 0 !important;
              height: 500px !important;
            }
          `}
        >
          <div
            className="h-100 shadow-lg"
            css={`
              border-radius: 25px;
            `}
          >
            <Image
              className="w-100"
              src="https://i.postimg.cc/N0Fxxh4k/3-CA0-F547-B2-CC-4-D88-B3-CF-8-D7-E19-C1-C8-A3.jpg"
              style={{
                height: "500px",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
              }}
              css={`
                @media (min-width: 768px) and (max-width: 991px) {
                  height: 400px !important;
                }
              `}
              alt="Offer"
              fluid
            />
            <div
              className="w-100 text-center"
              css={`
                height: 97px;
                border-radius: 25px;
                background-image: url(${sqImage});
                font-family: "poppins";
                padding-top: 10px;
              `}
            >
              <h1 className="fw-bold mb-0">GET 15% OFF</h1>
              <p className="fw-bold">ON YOUR FIRST TATTOO</p>
            </div>
          </div>
          {/* <Button variant="outline-dark my-4 d-block mx-auto">Checkout</Button> */}
        </Col>
        <Col
          md={4}
          css={`
            height: 600px;

            @media (max-width: 768px) {
              margin-top: 20px;
            }
            @media (min-width: 768px) and (max-width: 991px) {
              padding-left: 0 !important;
              padding-right: 0 !important;
              height: 500px !important;
            }
          `}
        >
          <div
            className="h-100 shadow-lg"
            css={`
              border-radius: 25px;
            `}
          >
            <Image
              className="w-100"
              src="https://i.postimg.cc/VkhfYNKF/IMG-1811.jpg"
              style={{
                height: "500px",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
              }}
              css={`
                @media (min-width: 768px) and (max-width: 991px) {
                  height: 400px !important;
                }
              `}
              alt="Offer"
              fluid
            />
            <div
              className="w-100 text-center"
              css={`
                height: 97px;
                border-radius: 25px;
                background-image: url(${sqImage});
                font-family: "poppins";
              `}
            >
              <p className="fw-bold pt-2 mb-0">GET INKED TOGETHER AND</p>
              <h1 className="fw-bold">GET 20% OFF</h1>
            </div>
          </div>
          {/* <Button variant="outline-dark my-4 d-block mx-auto">Checkout</Button> */}
        </Col>
        <Col
          md={4}
          css={`
            height: 600px;

            @media (max-width: 768px) {
              margin-top: 20px;
            }
            @media (min-width: 768px) and (max-width: 991px) {
              padding-left: 0 !important;
              padding-right: 0 !important;
              height: 500px !important;
            }
          `}
        >
          <div
            className="h-100 shadow-lg"
            css={`
              border-radius: 25px;
            `}
          >
            <Image
              className="w-100"
              src="https://i.postimg.cc/4x6D0Nrd/IMG-4056.jpg"
              style={{
                height: "500px",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
              }}
              css={`
                @media (min-width: 768px) and (max-width: 991px) {
                  height: 400px !important;
                }
              `}
              alt="Offer"
              fluid
            />
            <div
              className="w-100 text-center"
              css={`
                height: 97px;
                border-radius: 25px;
                background-image: url(${sqImage});
                font-family: "poppins";
                padding-top: 10px;
              `}
            >
              <h1 className="fw-bold mb-0">GET 25% OFF</h1>
              <p className="fw-bold">ON YOUR BIRTHDAY TATTOO</p>
            </div>
          </div>
          {/* <Button variant="outline-dark my-4 d-block mx-auto">Checkout</Button> */}
        </Col>
      </Row>
    </div>
  );
};

export default Offers;
