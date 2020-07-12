import React, { Component } from "react";

class Try extends Component {
  constructor(props) {
    super();
    this.state = {
      data: null,
      error: null,
      isLoading: false,
    };

    this.url = {
      baseUrl: "https://api.openweathermap.org/data/2.5/onecall",
      lat: null,
      lon: null,
      units: "metric",
      key: key,
      excluded: ["current", "minutely", "hourly"],
      set longAndLat(arr) {
        this.lat = arr.lat;
        this.lon = arr.lon;
      },

      get url() {
        return (
          this.baseUrl +
          "?" +
          "lat=" +
          this.lat +
          "&" +
          "lon=" +
          this.lon +
          "&" +
          "units=" +
          this.units +
          "&" +
          "exclude=" +
          this.excluded.join(",") +
          "&" +
          "appid=" +
          this.key
        );
      },
    };
  }
   
  render() {
    return <h1> Hello Word </h1>;
  }
}

export default Try;
