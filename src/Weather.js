import React, { Component } from "react";

class Weather extends Component {
  setClientTime = (offset) => {
    const curr = new Date();
    const clientOffset = curr.getTimezoneOffset() * 60 * 1000;
    const newTime = new Date(curr.getTime() + clientOffset + offset * 1000);
    return newTime.toDateString() + " " + newTime.toLocaleTimeString();
  };
  setSunTime = (time, offset) => {
    const curr = new Date(time * 1000),
      clientOffset = curr.getTimezoneOffset() * 60 * 1000,
      newTime = new Date(curr.getTime() + clientOffset + offset * 1000);
    return newTime.toLocaleTimeString();
  };
  render() {
    const sunRise = this.setSunTime(
        this.props.data.sunShine.sunrise,
        this.props.data.timeZone
      ),
      sunSet = this.setSunTime(
        this.props.data.sunShine.sunset,
        this.props.data.timeZone
      ),
      clientDate = this.setClientTime(this.props.data.timeZone);
    return (
      <div className="weather-information">
        <h2 className="city">
          {this.props.data.weather.description} expected in{" "}
          {this.props.data.name}
        </h2>
        <table>
          <tr>
            <td> Temperature </td>
            <td>
              <table className="inner-table">
                <tr>
                  <td> Average Temperature </td>
                  <td> {this.props.data.temp.avg} &#8457; </td>
                </tr>
                <tr>
                  <td> Minimum Temperature </td>
                  <td> {this.props.data.temp.min} &#8457;</td>
                </tr>
                <tr>
                  <td> Maximum Temperature </td>
                  <td> {this.props.data.temp.max} &#8457; </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td> Humidity </td>
            <td> {this.props.data.humidity} % </td>
          </tr>
          <tr>
            <td> Pressure </td>
            <td> {this.props.data.pressure} hPa </td>
          </tr>
          <tr>
            <td> Sunrise </td>
            <td> {sunRise} </td>
          </tr>
          <tr>
            <td> Sunset </td>
            <td> {sunSet} </td>
          </tr>
        </table>
        <div className="retrieval-date"> Date: {clientDate} </div>
      </div>
    );
  }
}

export default Weather;
