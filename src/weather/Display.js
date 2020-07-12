import React from "react";
import Try from "./Try";

function Display(props) {
  const { daily } = props.data;

  return (
    <div className = "display">
      {daily.map((dailyWeather, index) => {
        return <Try daily={dailyWeather.weather[0]} key={index + "aaa"} />;
      })}
    </div>
  );
}
export default Display;