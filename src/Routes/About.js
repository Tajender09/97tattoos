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
        src="https://i.postimg.cc/4x6D0Nrd/IMG-4056.jpg"
        width={300}
        height={300}
        css={`
          border-radius: 50%;
          border: 2px solid lightgrey;
          padding: 5px;
        `}
      />
      <h3 className="fw-bold my-3">Jai Singh</h3>
      <p className="w-50 mx-auto mb-4" css={`
        @media (max-width: 1000px) {
          width: 100% !important;
        }
      `}>
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
