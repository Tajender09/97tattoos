import React from "react";
import { Container } from "react-bootstrap";
import "styled-components/macro";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
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
      <div className="my-5">
        <img
          src="https://i.postimg.cc/4x6D0Nrd/IMG-4056.jpg"
          width={300}
          height={300}
          css={`
            border: 2px solid lightgrey;
            padding: 5px;
          `}
          alt="Jai Singh"
        />
        <h3 className="fw-bold my-3">Jai Singh</h3>
        <p
          className="w-50 mx-auto text-align-left mb-4"
          css={`
            @media (max-width: 1000px) {
              width: 100% !important;
            }
          `}
        >
          97 Tattoos first opened its doors early 2021, in the beautiful
          location of Jaipur, Rajasthan. Our dream was to create a welcoming
          studio, where both artists and clients can be inspired and enjoy the
          creative process. Today we are a studio with a talented artist, who
          has the same love for making art. We believe in constantly pushing
          boundaries and strive to continuously grow as a studio. We love to
          make unique pieces for our clients, and make sure your experience with
          us is as enjoyable as possible.
        </p>
        <p>
          97 Tattoos is a private studio, which means we're open by appointment
          only.
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

              @media (max-width: 640px) {
                font-size: 2rem;
              }
            }

            svg:hover {
              background-color: #000;
              color: #fff;
            }
          `}
        >
          <a
            href="https://www.facebook.com/profile.php?id=100083721346954"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/jaisingh_21?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="https://wa.me/7727861557" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.snapchat.com/" target="_blank" rel="noreferrer">
            <FaSnapchat />
          </a>
        </span>
      </div>
    </Container>
  );
};

export default About;
