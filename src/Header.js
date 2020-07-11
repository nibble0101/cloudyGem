import React, { Component, Fragment } from "react";
import HeaderText from "./Headertext";

class Header extends Component {
  componentDidMount() {
    const menu = document.querySelector(".header-text-wrapper-all");
    const hamMenu = document.querySelector(".menu-icon-wrapper");
    hamMenu.addEventListener("click", (e) => {
      menu.classList.toggle("show");
    });
  }
  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="title-wrapper">
            <h1 className="title"> Weather App </h1>
            <div className="menu-icon-wrapper">
              <button className="menu-icon">&#9776;</button>
            </div>
          </div>
        </header>
        <HeaderText />
      </Fragment>
    );
  }
}
export default Header;
