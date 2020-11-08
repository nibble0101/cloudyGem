import React, { useEffect } from "react";

function HeaderText() {
  useEffect(() => {
    const menu = document.querySelector(".header-text-wrapper-all");
    const hamMenu = document.querySelector(".menu-icon-wrapper");
    hamMenu.addEventListener("click", (e) => {
      menu.classList.toggle("show");
      /*
      e.stopPropagation() prevents propagation of the current
      click event in the capturing and bubbling phases.
      */
      e.stopPropagation();
    });
    document.body.addEventListener("click", (e) => {
      if (menu.classList.contains("show")) {
        menu.classList.toggle("show");
      }
    });
    return () => {
      hamMenu.removeEventListener("click", (e) => {
        if (menu.classList.contains("show")) {
          menu.classList.toggle("show");
        }
      });

      document.body.removeEventListener("click", (e) => {
        if (menu.classList.contains("show")) {
          menu.classList.toggle("show");
        }
      });
    };
  }, []);
  return (
    <div className="header-text-wrapper-all">
      <div className="header-text-container">
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_960_720.jpg"
          alt="Cold pretty woman"
          width="250"
          height="166.7"
        ></img>
        <p className="header-text">
          This is a weather app displaying the expected weather for different
          cities of the world. To retrieve the data, enter the name of the city
          in the search bar and click search. The weather information includes:
        </p>
        <ul>
          <li> Temperature</li>
          <li> Humidity</li>
          <li> Wind Speed </li>
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
export default HeaderText;
