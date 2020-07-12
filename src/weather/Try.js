import React from "react";
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
    <div className="wrapper">
      <h1>{daily.description}</h1>
      <p>
        <img src={iconUrlObject.url} alt={daily.main} />
      </p>
    </div>
  );
}
export default Try;
