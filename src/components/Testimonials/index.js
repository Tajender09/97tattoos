import React from "react";
import "styled-components/macro";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Testimonials = () => {
  const data = [
    {
      avatar:
        "https://i.postimg.cc/XvwpP5Rx/B0-B0509-E-7-E92-474-A-8-B88-04405268-FBE1-Varsha-Pathak.jpg",
      name: "Varsha Pathak",
      review:
        "It was my first tattoo and I must say my tattoo artist was fantastic, by his nature and as well his work. Will be visiting again there for my next tattoo😊😊😊",
    },
    {
      avatar:
        "https://i.postimg.cc/j5PQZCcr/IMG-20210926-WA0017-Aditya-Bhartiya.jpg",
      name: "Aditya Maurya",
      review:
        "You made my first tattoo experience a great one, and I am so very thankful.",
    },
    {
      avatar:
        "https://i.postimg.cc/nV1qzywT/Screenshot-20220908-233305-Chhavi-Gyanani.jpg",
      name: "Chhavi Gyanani",
      review:
        "I had 4 tattoo from 97tattoo,n this is the best experience I ever had ,the quality of piece is beyond my expectations, the way Jai bhaiya treats their customers!! Absolutely amazing.",
    },
    {
      avatar:
        "https://i.postimg.cc/vZCVkbc8/Screenshot-2022-09-08-23-39-00-261-com-miui-gallery-Lavina-Jaswani.jpg",
      name: "Lavina💕",
      review:
        "Amazing work 😍 \nTalented artist 💕\nTheyy made my first tattoo experience memorable 🥺❤",
    },
  ];
  const settings = {
    slidesToShow: 1,
    prevArrow: (
      <MdArrowBackIos
        css={`
          color: black;
          width: 2rem;
          height: 2rem;
          :hover {
            color: black;
          }
        `}
      />
    ),
    nextArrow: (
      <MdArrowForwardIos
        css={`
          width: 2rem;
          height: 2rem;
          color: black;
          :hover {
            color: black;
          }
        `}
      />
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          nextArrow: <></>,
          prevArrow: <></>,
        },
      },
    ],
  };
  return (
    <div className="mb-5">
      <h1
        className="my-5"
        css={`
          font-family: poppins;
          font-weight: bold;
          text-align: center;
        `}
      >
        What Client's Say
      </h1>
      <div
        className="d-flex justify-content-center"
        css={`
          margin-top: 50px;
        `}
      >
        <div
          css={`
            width: 50%;
            @media (max-width: 480px) {
              width: 100%;
            }
          `}
        >
          <Slider {...settings}>
            {data.map((item) => {
              return (
                <div
                  css={`
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    text-align: center !important;
                  `}
                >
                  <img
                    src={item.avatar}
                    css={`
                      height: 500px;
                      width: 420px;
                      border-radius: 25px;
                      border: 1px solid lightgray;
                      padding: 7px;

                      @media (max-width: 992px) {
                        width: 100%;
                      }
                    `}
                  />
                  <p
                    css={`
                      color: grey;
                      margin-top: 5px;
                    `}
                  >
                    {item.review}
                  </p>
                  <h5
                    css={`
                      font-family: poppins;
                      font-weight: bold;
                      margin: 10px 0;
                    `}
                  >
                    {item.name}
                  </h5>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
