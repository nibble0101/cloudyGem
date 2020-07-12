//500 is my own error code if the app fails to make an API call
//401 & 404 are response codes after making a bad API call

import React, { Component, Fragment } from "react";
import Weather from "./Weather";
import Search from "./Search";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      country: "",
      isLoading: false,
      errorStatus: null,
    };
  }
  loadData = (url) => {
    this.setState({ isLoading: true });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404" || data.cod === "401") {
          this.setState({
            error: data.message,
            country: "",
            errorStatus: null,
            isLoading: false,
          });
          return;
        }
        data = this.extractData(data);
        this.setState({ data: data, errorStatus: null, isLoading: false });
      })
      .catch((error) =>
        this.setState({
          error: error.name,
          errorStatus: "500",
          isLoading: false,
        })
      );
  };
  handleChange = (event) => {
    this.setState({
      country: event.target.value,
      error: null,
      errorStatus: null,
      data: null,
    });
  };
  handleSubmit = (e) => {
    e.target.preventDefault();
    if (this.state.country) {
      const url = "http://api.openweathermap.org/data/2.5/weather?q=",
        key = "&appid=" + process.env.REACT_APP_API_KEY,
        apiKey = url + this.state.country + key;
      this.loadData(apiKey);
    }
  };
  extractData = (data) => {
    return {
      name: data.name + ", " + data.sys.country,
      temp: {
        min: data.main.temp_min,
        max: data.main.temp_max,
        avg: data.main.temp,
        feelsLike: data.main.feels_like,
      },
      weather: {
        main: data.weather[0].main,
        description: data.weather[0].description,
      },
      wind: {
        direction: data.wind.deg,
        speed: data.wind.speed,
      },
      sunShine: {
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
      },
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      timeZone: data.timezone,
      visibility: data.visibility,
    };
  };
  render() {
    const { data, error, isLoading } = this.state;
    return (
      <Fragment>
        <Search
          value={this.state.country}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {!data && !error && !isLoading && (
          <div className="img-div">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/10/23/sun-157126_960_720.png"
              alt=""
            ></img>
          </div>
        )}
        {this.state.isLoading && (
          <div className="loader">
            Loading<span>...</span>
          </div>
        )}
        {this.state.data && (
          <h1 className="main-header-text">
            Weather forecast for {this.state.data.name}
          </h1>
        )}
        {this.state.error && this.state.errorStatus && (
          <div>
            <p className="error-message dissapointed-face">
              OOOPS!
              <span role="img" aria-label="sad emoji">
                😞
              </span>
            </p>
            <p className="error-message">An Error occurred. Try again later!</p>
            <p className="error-message">
              You can also get in touch with me by opening an issue
              <a
                href="https://github.com/nibble0101/weather-app-revised"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here
              </a>
            </p>
          </div>
        )}
        {this.state.error && !this.state.errorStatus && (
          <p className="error-message dissapointed-face">
            OOOPS!
            <span role="img" aria-label="sad emoji">
              😞
            </span>
            {this.state.error}
          </p>
        )}
        {this.state.data && <Weather data={this.state.data} />}
      </Fragment>
    );
  }
}

export default Main;
