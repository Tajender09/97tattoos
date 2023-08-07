import React from "react";
import logo from "../../Assets/Images/white-logo.PNG";
import "styled-components/macro";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaChevronRight,
  FaRegCopyright,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      css={`
        background-color: #000;
        color: #fff;
        width: 100%;
      `}
    >
      <Container
        css={`
          padding-top: 100px;
        `}
      >
        <Row className="mb-4">
          <Col
            lg={4}
            className="first"
            css={`
              @media (max-width: 992px) {
                text-align: center;
              }
            `}
          >
            <Link to="/">
              <img
                src={logo}
                alt="97 Tattoos"
                css={`
                  width: 70px;
                `}
              />
            </Link>
            <p className="my-4">
              We have the best tattoo artist to help you get a perfect creative
              custom tattoo which is uniquely designed based on your ideas.
            </p>
            <p
              className="social"
              css={`
                a {
                  margin-top: 20px;
                  padding: 13px;
                  font-size: 13px;
                  text-align: center;
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 50%;
                  color: #fff;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  margin-right: 10px;
                  transition: all 0.7s;
                }
              `}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100083721346954"
                target="_blank"
                rel="noreferrer"
                css={`
                  :hover {
                    color: #4267b2;
                    border-color: #4267b2;
                  }
                `}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/97tattoosjaipur?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noreferrer"
                css={`
                  :hover {
                    color: #bc2a8d;
                    border-color: #bc2a8d;
                  }
                `}
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/7727861557"
                target="_blank"
                rel="noreferrer"
                css={`
                  :hover {
                    color: #25d366;
                    border-color: #25d366;
                  }
                `}
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:97tattoos@gmail.com"
                target="_blank"
                rel="noreferrer"
                css={`
                  :hover {
                    color: #e60023;
                    border-color: #e60023;
                  }
                `}
              >
                <FiMail />
              </a>
            </p>
          </Col>
          <Col
            lg={2}
            css={`
              @media (max-width: 992px) {
                text-align: center;
                margin-top: 2rem;
              }
            `}
          >
            <h6
              css={`
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 30px;
                font-weight: bolder;
                text-align: center;
              `}
            >
              Useful Links
            </h6>
            <ul
              css={`
                list-style: none;
                display: inline-block;
                text-align: left;
              `}
            >
              <li
                css={`
                  font-size: 14px;
                  margin-bottom: 10px;
                `}
              >
                <FaChevronRight />
                <Link
                  css={`
                    text-decoration: none;
                    color: #888;
                    margin-left: 5px;
                    :hover {
                      color: #fff;
                    }
                  `}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                css={`
                  font-size: 14px;
                  margin-bottom: 10px;
                `}
              >
                <FaChevronRight />
                <Link
                  css={`
                    text-decoration: none;
                    color: #888;
                    margin-left: 5px;
                    :hover {
                      color: #fff;
                    }
                  `}
                  to="/shop"
                >
                  Shop
                </Link>
              </li>
              <li
                css={`
                  font-size: 14px;
                  margin-bottom: 10px;
                `}
              >
                <FaChevronRight />
                <Link
                  css={`
                    text-decoration: none;
                    color: #888;
                    margin-left: 5px;
                    :hover {
                      color: #fff;
                    }
                  `}
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li
                css={`
                  font-size: 14px;
                  margin-bottom: 10px;
                `}
              >
                <FaChevronRight />
                <Link
                  css={`
                    text-decoration: none;
                    color: #888;
                    margin-left: 5px;
                    :hover {
                      color: #fff;
                    }
                  `}
                  to="/categories"
                >
                  Tattoo Categories
                </Link>
              </li>
            </ul>
          </Col>
          <Col
            lg={2}
            className="call"
            css={`
              @media (max-width: 992px) {
                text-align: center;
                margin-top: 2rem;
              }
            `}
          >
            <h6
              css={`
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 30px;
                font-weight: bolder;
                position: relative;

                :before {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 23px;
                  width: 70%;
                  background: rgba(255, 255, 255, 0.1);
                  height: 1px;
                }

                @media (max-width: 992px) {
                  :before {
                    width: 50%;
                    left: 25%;
                  }
                }
              `}
            >
              call
            </h6>
            <a
              href="tel:+917727861557"
              css={`
                color: #888;
                font-size: 14px;
                font-weight: 400;
                line-height: 2;
                margin: 0;
                text-decoration: none;

                :hover {
                  color: #fff;
                }
              `}
            >
              +91 77278 61557
            </a>
          </Col>
          <Col
            lg={2}
            className="mail"
            css={`
              @media (max-width: 992px) {
                text-align: center;
                margin-top: 2rem;
              }
            `}
          >
            <h6
              css={`
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 30px;
                font-weight: bolder;
                position: relative;

                :before {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 23px;
                  width: 70%;
                  background: rgba(255, 255, 255, 0.1);
                  height: 1px;
                }

                @media (max-width: 992px) {
                  :before {
                    width: 50%;
                    left: 25%;
                  }
                }
              `}
            >
              write
            </h6>
            <a
              href="mailto:info@97tattoos.com"
              css={`
                text-decoration: none;
                color: #888;
                font-size: 14px;
                font-weight: 400;
                line-height: 2;
                margin: 0;

                :hover {
                  color: #fff;
                }
              `}
            >
              info@97tattoos.com
            </a>
            <br />
            <a
              href="mailto:97tattoos@gmail.com"
              css={`
                text-decoration: none;
                color: #888;
                font-size: 14px;
                font-weight: 400;
                line-height: 2;
                margin: 0;

                :hover {
                  color: #fff;
                }
              `}
            >
              97tattoos@gmail.com
            </a>
          </Col>
          <Col
            lg={2}
            className="visit"
            css={`
              @media (max-width: 992px) {
                text-align: center;
                margin-top: 2rem;
              }
            `}
          >
            <h6
              css={`
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 30px;
                font-weight: bolder;
                position: relative;

                :before {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 23px;
                  width: 70%;
                  background: rgba(255, 255, 255, 0.1);
                  height: 1px;
                }

                @media (max-width: 992px) {
                  :before {
                    width: 50%;
                    left: 25%;
                  }
                }
              `}
            >
              visit
            </h6>
            <p
              css={`
                color: #888;
                font-size: 14px;
                font-weight: 400;
                line-height: 2;
                margin: 0;
              `}
            >
              S-19 (G-1) Shiv Goraksh Nagar,
              <br />
              Modeltown, Jagatpura
              <br />
              Jaipur(Raj.)
            </p>
          </Col>
        </Row>
        <div
          css={`
            border-top: 1px solid #888;

            @media (max-width: 371px) {
              justify-content: center !important;
            }
          `}
          className="d-flex justify-content-between align-items-center flex-wrap py-4"
        >
          <p
            css={`
              font-size: 14px;
            `}
          >
            Copyright <FaRegCopyright /> 2023, 97 Tattoo Studio.
          </p>
          <div
            css={`
              position: relative;
            `}
          >
            <p
              css={`
                font-size: 14px;
              `}
            >
              All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
