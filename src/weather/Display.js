import React from "react";
import Try from "./Try";
import Zoom from "react-reveal/Zoom";

function Display(props) {
  const { daily } = props.data;
  return (
    <Zoom>
      <p className="country">
        {props.country.city} - {props.country.country}
      </p>
      <div className="display">
        {daily.map((dailyWeather, index) => {
          return (
            <Try
              dailyWeather={dailyWeather}
              key={Math.random()}
              timeZoneOffset={props.data.timezone_offset}
            />
          );
        })}
      </div>
    </Zoom>
  );
}
export default Display;
