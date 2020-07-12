//500 is my own error code if the app fails to make an API call
//401 & 404 are response codes after making a bad API call

import React, { Fragment, useState, useEffect } from "react";
import Weather from "./Weather";
import Search from "./Search";
import GenerateUrl from "./url";
import Display from "./weather/Display"
const urlLocationApi = "https://json.geoiplookup.io";
function Main() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);
  useEffect(() => {
    const coord = { lat: null, lon: null };
    async function fetchData() {
      setIsLoading(true);
      await fetch(urlLocationApi)
        .then((response) => response.json())
        .then((data) => {
          coord.lat = data.latitude;
          coord.lon = data.longitude;
        }).catch(err => setError(err))
      const urlObj = new GenerateUrl(
        coord.lat,
        coord.lon,
        process.env.REACT_APP_API_KEY
      );
      await fetch(urlObj.url())
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        }).catch(err => setError(err));
        setIsLoading(false)
    }
    fetchData();
  }, []);
  return (
    <Fragment>
      <Search value={country} />
      {!error && !data && !isLoading && (
        <div className="img-div">
          <img
            src="https://cdn.pixabay.com/photo/2013/07/13/10/23/sun-157126_960_720.png"
            alt=""
          ></img>
        </div>
      )}
      {isLoading && (
        <div className="loader">
          Loading<span>...</span>
        </div>
      )}
      {/* {data && <h1 className="main-header-text">Weather forecast for {""}</h1>} */}
      {error && errorStatus && (
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
      {error && !errorStatus && (
        <p className="error-message dissapointed-face">
          OOOPS!
          <span role="img" aria-label="sad emoji">
            😞
          </span>
          {error}
        </p>
      )}
      {
          data &&  <Display data = {data}/>
      }
      {/* {data && <Weather data={data} />} */}
    </Fragment>
  );
}

export default Main;
