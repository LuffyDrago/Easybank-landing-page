import React from "react";
import logo from "../images/logo.svg";

//Socials

import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pintrest from "../images/icon-pinterest.svg";
import insta from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer__container">
          <div className="footer__logo">
            <a href="#" className="footer__logo-link">
              <img
                src={logo}
                alt="Easybank - Home page"
                className="footer__logo-img"
              />
            </a>
          </div>
          <div className="footer__socials">
            <a href="#" className="footer__socials-link">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#" className="footer__socials-link">
              <img src={youtube} alt="facebook" />
            </a>
            <a href="#" className="footer__socials-link">
              <img src={twitter} alt="facebook" />
            </a>
            <a href="#" className="footer__socials-link">
              <img src={pintrest} alt="facebook" />
            </a>
            <a href="#" className="footer__socials-link">
              <img src={insta} alt="facebook" />
            </a>
          </div>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">
                  About Us
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">
                  Contact
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">
                  Blog
                </a>
              </li>
            </ul>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">
                  Careers
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">
                  Support
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
          <a className="btn-reuse" href="#">
            Request Invite
          </a>
          <span className="lastsentence">
            &copy; Easybank. All Rights Reserved
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
