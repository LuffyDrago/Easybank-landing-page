import React from "react";

const ArticleCard = ({ img, author, heading, details }) => {
  return (
    <>
      <div className="articleCard">
        <div className="articleimg">
          <img src={img} className="article__img" />
        </div>

        <div className="articlecard-info">
          <span className="small-detail">{author}</span>
          <h4 className="article-title">{heading}</h4>
          <p className="article-paragraph">{details}</p>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
