import React from "react";
import Zoom from "react-reveal/Zoom";
const iconUrlObject = {
  baseUrl: "http://openweathermap.org/img/wn/",
  weatherIcon: null,
  urlExtension: "@2x.png",
  set icon(icon) {
    this.weatherIcon = icon;
  },
  get url() {
    return this.baseUrl + this.weatherIcon + this.urlExtension;
  },
};

function Try(props) {
  const { daily } = props;
  iconUrlObject.icon = daily.icon;

  return (
    <Zoom>
      <div className="weather-info-wrapper">
        <h1>{daily.description}</h1>
        <p>
          <img src={iconUrlObject.url} alt={daily.main} />
        </p>
      </div>
    </Zoom>
  );
}
export default Try;
