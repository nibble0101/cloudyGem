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
          <h1 className = "app-name">
            <span className="app-name-text-1">cloudy</span>
            <span className="app-name-text-2">GEM</span>
          </h1>
          <h1> Weather App </h1>
          <div className="menu-icon-wrapper">
            <button className="menu-icon">&#9776;</button>
          </div>
        </header>
        <HeaderText />
      </Fragment>
    );
  }
}
export default Header;
