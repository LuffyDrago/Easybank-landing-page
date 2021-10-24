import React from "react";
import ServicesCard from "./ServicesCard";

//im ages
import online from "../images/icon-online.svg";
import budget from "../images/icon-budgeting.svg";
import onboard from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="services-info">
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="servicesall">
          <ServicesCard
            img={online}
            title="Online Banking"
            description="Our modern web and mobile applications allow you to keep track of your finances 
            wherever you are in the world.
          "
          />
          <ServicesCard
            img={budget}
            title=" Simple Budgeting"
            description=" See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits."
          />
          <ServicesCard
            img={onboard}
            title="Fast Onboarding"
            description="We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away."
          />
          <ServicesCard
            img={api}
            title="Open API"
            description="Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier.
          "
          />
        </div>
      </section>
    </>
  );
};

export default Services;
