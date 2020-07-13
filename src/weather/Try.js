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
        <div>
          <span>
            <span> Temperature </span>
            <span>
              <span> Morning </span>
              <span> {dailyWeather.temp.morn} &#8457; </span>
            </span>
            <span>
              <span> Day </span>
              <span> {dailyWeather.temp.day} &#8457; </span>
            </span>
            <span>
              <span> Evening </span>
              <span> {dailyWeather.temp.eve} &#8457; </span>
            </span>
            <span>
              <span> Night </span>
              <span> {dailyWeather.temp.night} &#8457; </span>
            </span>
            <span>
              <span> Minimum Temperature </span>
              <span> {dailyWeather.temp.min} &#8457;</span>
            </span>
            <span>
              <span> Maximum Temperature </span>
              <span> {dailyWeather.temp.max} &#8457; </span>
            </span>
          </span>
          <p>
            <span> Humidity </span>
            <span> {dailyWeather.humidity} % </span>
          </p>
          <p>
            <span> Pressure </span>
            <span> {dailyWeather.pressure} hPa </span>
          </p>
          <p>
            <span> Wind Speed </span>
            <span> {dailyWeather.wind_speed} mespane/sec </span>
          </p>
          <p>
            <span> Sunrise </span>
            <span>
              {setSunTime(dailyWeather.sunrise, props.timeZoneOffset)}
            </span>
          </p>
          <p>
            <span> Sunset </span>
            <span>
              {setSunTime(dailyWeather.sunset, props.timeZoneOffset)}
            </span>
          </p>
        </div>
      </div>
    </Zoom>
  );
}
export default spany;
