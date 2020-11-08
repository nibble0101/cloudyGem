import React, { Fragment } from "react";
import HeaderText from "./Headertext";
const imageUrl = "https://cdn.pixabay.com/photo/2013/07/13/10/23/sun-157126_960_720.png"
function Header(props) {
  return (
    <Fragment>
      <header className="header">
        <h1 className = "app-name">
          <span className="app-name-text-1">cloudy</span>
          <span className="app-name-text-2">GEM</span>
          <span className = "spinning-sun"> 
          <img
            src= {imageUrl}
            alt="spinning yellow sun"
            width="50"
            height="50"
          />
          </span>
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
export default Header;
