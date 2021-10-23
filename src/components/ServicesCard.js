import React from "react";

const ServicesCard = ({ img, title, description }) => {
  return (
    <>
      <div className="cards">
        <div className="cards-circle">
          <img src={img} className="card__img" />
        </div>
        <h3 className="cards-title">{title}</h3>
        <p className="cards-paragraph">{description}</p>
      </div>
    </>
  );
};

export default ServicesCard;
