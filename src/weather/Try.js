import React from "react";
import Zoom from "react-reveal/Zoom";
import { iconUrlObject, dateFormatter, setSunTime } from "./utils";

function Try(props) {
  const { dailyWeather } = props;
  iconUrlObject.icon = dailyWeather.weather[0].icon;

  return (
    <Zoom>
      <div className="weather-info-wrapper">
        <p className="date">{dateFormatter(dailyWeather.dt)}</p>
        <p>{dailyWeather.weather[0].description} Expected</p>
        <p>
          <img src={iconUrlObject.url} alt={dailyWeather.weather[0].main} />
        </p>
        <table>
          <tr>
            <td> Temperature </td>
            <td>
              <table className="inner-table">
                <tr>
                  <td> Morning </td>
                  <td> {dailyWeather.temp.morn} &#8457; </td>
                </tr>
                <tr>
                  <td> Day </td>
                  <td> {dailyWeather.temp.day} &#8457; </td>
                </tr>
                <tr>
                  <td> Evening </td>
                  <td> {dailyWeather.temp.eve} &#8457; </td>
                </tr>
                <tr>
                  <td> Night </td>
                  <td> {dailyWeather.temp.night} &#8457; </td>
                </tr>
                <tr>
                  <td> Minimum Temperature </td>
                  <td> {dailyWeather.temp.min} &#8457;</td>
                </tr>
                <tr>
                  <td> Maximum Temperature </td>
                  <td> {dailyWeather.temp.max} &#8457; </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td> Humidity </td>
            <td> {dailyWeather.humidity} % </td>
          </tr>
          <tr>
            <td> Pressure </td>
            <td> {dailyWeather.pressure} hPa </td>
          </tr>
          <tr>
            <td> Wind Speed </td>
            <td> {dailyWeather.wind_speed} metre/sec </td>
          </tr>
          <tr>
            <td> Sunrise </td>
            <td> {setSunTime(dailyWeather.sunrise, props.timeZoneOffset)} </td>
          </tr>
          <tr>
            <td> Sunset </td>
            <td> {setSunTime(dailyWeather.sunset, props.timeZoneOffset)} </td>
          </tr>
        </table>
      </div>
    </Zoom>
  );
}
export default Try;
