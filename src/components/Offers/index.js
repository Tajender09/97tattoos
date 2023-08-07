import React from "react";
import styled from "styled-components/macro";
import offerImage from "../../Assets/Images/Offer1.JPG";
import offerImage2 from "../../Assets/Images/Offer2.jpg";

const Offers = () => {
  const OfferDetails = [
    {
      id: 1,
      title: "GET 15% OFF",
      subtitle: "ON YOUR FIRST TATTOO",
      image: offerImage,
    },
    {
      id: 2,
      title: "GET 20% OFF",
      subtitle: "GET INKED TOGETHER AND",
      image: offerImage2,
    },
    {
      id: 3,
      title: "GET 25% OFF",
      subtitle: "ON YOUR BIRTHDAY TATTOO",
      image: "https://i.postimg.cc/4x6D0Nrd/IMG-4056.jpg",
    },
  ];

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
      <div
        css={`
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        `}
      >
        {OfferDetails.map((offer) => {
          return (
            <OfferCard key={offer.id} id={offer.id}>
              <img src={offer.image} alt={offer.title} />
              <div>
                <h1 className="title">{offer.title}</h1>
                <p className="subtitle">{offer.subtitle}</p>
              </div>
            </OfferCard>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;

const OfferCard = styled.div`
  width: 30%;
  border-radius: 25px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);

  @media (max-width: 640px) {
    width: 100%;
    margin-top: ${(props) => (props.id !== 1 ? "1rem" : 0)};
  }

  @media (min-width: 481px) and (max-width: 640px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 641px) and (max-width: 768px) {
    width: 32%;
  }

  & > div {
    font-family: "poppins";
    display: flex;
    flex-direction: ${(props) =>
      props.id === 2 ? "column-reverse" : "column"};
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;

    @media (min-width: 641px) and (max-width: 768px) {
      padding: 10px;
    }
  }

  & > div .title {
    font-weight: 700;
    margin-bottom: 0;

    @media (min-width: 641px) and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  & > div .subtitle {
    font-weight: 700;
    margin-bottom: 0;

    @media (min-width: 641px) and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  & > img {
    width: 100%;
    height: 100%;
    max-height: 500px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
`;
