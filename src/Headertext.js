import React, { Component } from "react";

class HeaderText extends Component {
  render() {
    return (
      <div className="header-text-wrapper-all">
        <div className="header-text-container">
          <img
            className="img"
            src="https://cdn.pixabay.com/photo/2016/11/29/11/12/adult-1869119_960_720.jpg"
            alt="Woman in the rain"
          ></img>
          <p className="header-text">
            This is a weather app displaying the expected weather for different
            cities of the world. To retrieve the data, enter the name of the
            city in the search bar and click search. The weather information
            includes:
          </p>
          <ul>
            <li> Average Temperature</li>
            <li> Humidity</li>
            <li> Atmospheric Pressure</li>
            <li> Time for Sunrise </li>
            <li> Time for Sunset </li>
          </ul>
          <p className="data-source">
            Data source:
            <a
              href="https://openweathermap.org"
              target="_blank"
              rel="noreferrer noopener"
            >
              Open Weather Map
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default HeaderText;
