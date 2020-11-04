import React from "react";
import Weather from "./Weather";
import Error from "../error/Error";
import Loader from "../main/Loader";
import Fade from "react-reveal/Fade";

function Display(props) {
  const {
    data: { daily },
    error,
    isLoading
  } = props;
  if(isLoading === true){
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Fade>
      <p className="country">
        {props.country.city} - {props.country.country}
      </p>
      <div className="display">
        {daily.map((dailyWeather, index) => {
          return (
            <Weather
              dailyWeather={dailyWeather}
              key={index + "display"}
              timeZoneOffset={props.data.timezone_offset}
            />
          );
        })}
      </div>
    </Fade>
  );
}
export default Display;
