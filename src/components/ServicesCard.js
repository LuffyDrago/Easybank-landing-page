import React from "react";

const ServicesCard = ({ img, title, description }) => {
  return (
    <>
      <div className="cards">
        <div className="cards-circle">
          <input
            type="image"
            img
            src={img}
            className="card__img"
            alt="description of image"
          />
        </div>
        <h3 className="cards-title">{title}</h3>
        <p className="cards-paragraph">{description}</p>
      </div>
    </>
  );
};

export default ServicesCard;
