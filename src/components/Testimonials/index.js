import React from "react";
import "styled-components/macro";
import Slider from "react-slick";

const Testimonials = () => {
  const data = [
    {
      avatar:
        "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
      name: "Rohit Kumar",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      avatar:
        "https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
      name: "Shyam Sharma",
      review:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
    },
  ];
  return (
    <>
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
      <div className="d-flex justify-content-center" css={`margin-top: 50px;`}>
        <div className="w-50">
          <Slider>
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
                      height: 120px;
                      width: 120px;
                      border-radius: 50%;
                      border: 1px solid lightgray;
                      padding: 7px;
                    `}
                  />
                  <p css={`color: grey;`}>{item.review}</p>
                  <h5 css={`font-family: poppins; font-weight: bold; margin-top: 25px;`}>{item.name}</h5>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
