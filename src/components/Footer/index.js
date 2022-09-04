import React from "react";
import logo from "../../Assets/Images/white-logo.PNG";
import "styled-components/macro";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaChevronRight,
  FaRegCopyright,
  FaChevronUp,
} from "react-icons/fa";

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
          <Col lg={4} className="first">
            <Link to="/97tattoos">
              <img
                src={logo}
                alt="97 Tattoos"
                css={`
                  width: 170px;
                `}
              />
            </Link>
            <p className="my-4">
              We provide a full range of false ceiling and acoustical solutions.
              Connect with us on Social Media!
            </p>
            <p
              className="social"
              css={`
                a {
                  margin-top: 20px;
                  padding: 13px 16px 15px;
                  font-size: 13px;
                  text-align: center;
                  border-radius: 50%;
                  color: #fff;
                  border: 1px solid rgba(255, 255, 255, 0.1);
                  margin-right: 10px;
                  transition: color 0.7s;
                  transition: border-color 0.7s;
                }
              `}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100083721346954"
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
                href="https://instagram.com/97_tattoos_jpr/"
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
                href="https://pin.it/5kDAGyC"
                css={`
                  :hover {
                    color: #e60023;
                    border-color: #e60023;
                  }
                `}
              >
                <FaPinterestP />
              </a>
              <a
                href="https://twitter.com/"
                css={`
                  :hover {
                    color: #1da1f2;
                    border-color: #1da1f2;
                  }
                `}
              >
                <FaTwitter />
              </a>
            </p>
          </Col>
          <Col lg={2}>
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
                padding-left: 2rem;
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
                  to="/97tattoos"
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
          <Col lg={2} className="call">
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
          <Col lg={2} className="mail">
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
              `}
            >
              write
            </h6>
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
          <Col lg={2} className="visit">
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
          `}
          className="d-flex justify-content-between align-items-center flex-wrap py-4"
        >
          <p
            css={`
              font-size: 14px;
            `}
          >
            Copyright <FaRegCopyright /> 2022, 97 Tattoo Studio.
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
