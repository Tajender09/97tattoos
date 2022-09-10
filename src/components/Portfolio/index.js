import React from "react";
import "styled-components/macro";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Button } from "react-bootstrap";
import Custom1 from "../../Assets/Images/portfolio/custom1.jpg";
import Religious from "../../Assets/Images/portfolio/religious2.jpg";
import Name from "../../Assets/Images/portfolio/name.jpg";
import Pet from "../../Assets/Images/portfolio/pet.jpg";
import Couple from "../../Assets/Images/portfolio/couple.JPG";
import Custom2 from "../../Assets/Images/portfolio/custom2.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      image: Custom1,
      name: "Animal Tattoo",
    },
    {
      image: Religious,
      name: "Religious Tattoo",
    },
    {
      image: Name,
      name: "Script Tattoo",
    },
    {
      image: Pet,
      name: "Animal Tattoo",
    },
    {
      image: Couple,
      name: "Couple Tattoos",
    },
    {
      image: Custom2,
      name: "Realism Tattoo",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="my-5">
      <p
        className="text-center my-5"
        css={`
          font-size: 2.5rem;
          font-family: "Poppins", sans-serif;
          font-weight: bold !important;
        `}
      >
        Our Previous Work
      </p>
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
        {projects.map((item) => {
          return (
            <div
              css={`
                border-radius: 25px;
                outline: none;
              `}
              key={item.name}
            >
              <img
                css={`
                  border-radius: 25px;
                `}
                src={item.image}
                alt={item.name}
                className="w-100 h-100"
              />
              <h4
                css={`
                  font-family: "Poppins", sans-serif;
                  font-weight: bold;
                `}
                className="text-center mt-2"
              >
                {item.name}
              </h4>
            </div>
          );
        })}
      </Slider>
      <Link
        css={`
          text-decoration: none;
        `}
        to={"/portfolio"}
      >
        <Button variant="outline-dark" className="mt-5 d-block mx-auto">
          Checkout More
        </Button>
      </Link>
    </div>
  );
};

export default Portfolio;
