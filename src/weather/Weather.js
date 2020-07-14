import React from "react";
import Zoom from "react-reveal/Zoom";
import { iconUrlObject, dateFormatter, setSunTime } from "./utils";

function spany(props) {
  const { dailyWeather } = props;
  iconUrlObject.icon = dailyWeather.weather[0].icon;

  return (
    <Zoom>
      <div className="weather-info-wrapper">
        <div className="date">{dateFormatter(dailyWeather.dt)}</div>
        <div>{dailyWeather.weather[0].description} Expected</div>
        <div>
          <img src={iconUrlObject.url} alt={dailyWeather.weather[0].main} />
        </div>
        <div className = "other">
          <div className = "temperature">
            <div className = "label"> Temperature </div>
            <div className = "temperature-breakdown">
              <span className = "morning">
                <span> Morning </span>
                <span> {dailyWeather.temp.morn} &#8451; </span>
              </span>
              <span className = "day">
                <span> Day </span>
                <span> {dailyWeather.temp.day} &#8451; </span>
              </span>
              <span className = "evening">
                <span> Evening </span>
                <span> {dailyWeather.temp.eve} &#8451; </span>
              </span>
              <span className = "night">
                <span> Night </span>
                <span> {dailyWeather.temp.night} &#8451; </span>
              </span>
              <span className = "min-temp">
                <span> Min. Temperature </span>
                <span> {dailyWeather.temp.min} &#8451;</span>
              </span>
              <span className = "max-temp">
                <span> Max. Temperature </span>
                <span> {dailyWeather.temp.max} &#8451; </span>
              </span>
            </div>
          </div>
          <div className = "humidity">
            <span> Humidity </span>
            <span> {dailyWeather.humidity} % </span>
          </div>
          <div className = "pressure">
            <span> Pressure </span>
            <span> {dailyWeather.pressure} hPa </span>
          </div>
          <div className = "wind-speed">
            <span> Wind Speed </span>
            <span> {dailyWeather.wind_speed} metres/sec </span>
          </div>
          <div className = "sunrise">
            <span> Sunrise </span>
            <span>
              {setSunTime(dailyWeather.sunrise, props.timeZoneOffset)}
            </span>
          </div>
          <div className = "sunset">
            <span> Sunset </span>
            <span>{setSunTime(dailyWeather.sunset, props.timeZoneOffset)}</span>
          </div>
        </div>
      </div>
    </Zoom>
  );
}
export default spany;
