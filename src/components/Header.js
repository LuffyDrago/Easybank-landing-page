import React from "react";

// import desktopImage from "../images/bg-intro-desktop.svg";
// import mobileImage from "../images/bg-intro-mobile.svg";
// import mobileImageover from "../images/image-mockups.png";

const Header = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__image">
          <picture>
            {/* <source media="(min-width: 1024px)" srcset={desktopImage} />
            <img src={mobileImage} alt="mobile" /> */}
          </picture>
          {/* <img ClassName="before" src={mobileImageover} alt="mobileover" /> */}
        </div>

        <div className="hero__text">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <a className="btn-reuse" href="#/">
            Request Invite
          </a>
        </div>
      </section>
    </>
  );
};

export default Header;
