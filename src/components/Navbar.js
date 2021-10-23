import React, { Component } from "react";
import logo from "../images/logo.svg";
// import open from "../images/icon-hamburger.svg";
// import close from "../images/icon-close.svg";
import { MenuItems } from "./Menuitems";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      // -- Menu overlay background -->

      <header>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <img src={logo} alt="easy logo" />
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            {/* <i
              className={
                this.state.clicked ? (
                  <img src={close} alt="close" />
                ) : (
                  <img src={open} alt="hamburger" />
                )
              }
            ></i> */}

            <i
              className={
                this.state.clicked ? "fas fa-times  " : "fas fa-bars  "
              }
            ></i>
          </div>
          <ul
            className={this.state.clicked ? "nav-menu active " : "nav-menu  "}
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <a className="btn" href="#">
            Request Invite
          </a>
        </nav>
      </header>
    );
  }
}

export default Navbar;
