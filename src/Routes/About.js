import React from "react";
import { Container } from "react-bootstrap";
import "styled-components/macro";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSnapchat,
} from "react-icons/fa";

const About = () => {
  return (
    <Container
      css={`
        font-family: poppins;
      `}
      className="text-center"
    >
      <h1
        css={`
          font-size: 32px;
          line-height: 44px;
          letter-spacing: 19px;
          font-family: "Nunito";
          font-weight: bolder;

          @media (max-width: 400px) {
            letter-spacing: 12px;
          }
        `}
      >
        ABOUT US
      </h1>
      <div className='my-5'>
      <img
        src="data:image/jpeg;base64,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"
        width={300}
        height={300}
        css={`
          border-radius: 50%;
          border: 2px solid lightgrey;
          padding: 5px;
        `}
      />
      <h3 className="fw-bold my-3">Jai Singh</h3>
      <p className="w-50 mx-auto mb-4">
        Jai Singh is one of the most ambitious Tattoo Makers in the country, he
        started his tattooing journey in 2010. Talk about pure young talent and
        Jai’s work will blow your mind. From dot-work tattoos, portrait tattoos,
        realism to new school tattoos, he has a portfolio that’s too diverse and
        exquisite for his age.
      </p>
      <span
        css={`
          a {
            color: black;
          }
          svg {
            background-color: #fff;
            font-size: 3rem;
            border: 2px solid black;
            text-align: center;
            padding: 5px;
            margin: 0 5px;
          }

          svg:hover {
            background-color: #000;
            color: #fff;
          }
        `}
      >
        <a href="">
          <FaFacebookF />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaSnapchat />
        </a>
      </span>
      </div>
    </Container>
  );
};

export default About;
