import React from "react";
import ArticleCard from "./ArticleCard";

//im ages
import currency from "../images/image-currency.jpg";
import resturant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

const Article = () => {
  return (
    <>
      <section className="article-section">
        <h2>Latest Articles</h2>
        <div className="article-all">
          <ArticleCard
            img={currency}
            author="By Claire Robinson"
            heading="Receive money in any currency with no fees"
            details="The world is getting smaller and we’re becoming more mobile. So why should you be 
            forced to only receive money in a single …
          "
          />
          <ArticleCard
            img={resturant}
            author="By Wilson Hutton"
            heading="Treat yourself without worrying about money"
            details="Our simple budgeting feature allows you to separate out your spending and set 
            realistic limits each month. That means you …
          
          "
          />
          <ArticleCard
            img={plane}
            author="By Wilson Hutton"
            heading="Take your Easybank card wherever you go"
            details="We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
            while you’re abroad. We’ll even show you …
          "
          />
          <ArticleCard
            img={confetti}
            author="By Claire Robinson"
            heading=" Our invite-only Beta accounts are now live!"
            details="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
            It’s easy to request an invite through the site ...          
          "
          />
        </div>
      </section>
    </>
  );
};

export default Article;
