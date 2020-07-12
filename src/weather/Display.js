import React from "react";
import Try from "./Try";
import Zoom from "react-reveal/Zoom";

function Display(props) {
  const { daily } = props.data;

  return (
    <Zoom>
      <div className="display">
        {daily.map((dailyWeather, index) => {
          return <Try daily={dailyWeather.weather[0]} key={index + "aaa"} />;
        })}
      </div>
    </Zoom>
  );
}
export default Display;
