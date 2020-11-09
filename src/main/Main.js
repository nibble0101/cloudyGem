import React, { Fragment, useState, useEffect, useCallback } from "react";
import { geolocated } from "react-geolocated";
import Footer from "../footer/Footer";
import Search from "./Search";
import Loader from "./Loader";
import GenerateUrl from "./url";
import Display from "../weather/Display";

function Main(props) {
  const { coords } = props;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [params, setParams] = useState("");
  const [value, setValue] = useState("");
  const handleChange = useCallback((e) => {
    setError(null);
    setValue(e.target.value);
  }, []);
  const handleSubmit = useCallback(
    (e) => {
      setParams(value);
      e.preventDefault();
    },
    [value]
  );
  useEffect(() => {
    if (coords === null) return;
    async function fetchData() {
      setIsLoading(true);
      const urlObj = new GenerateUrl(
        coords.latitude,
        coords.longitude,
        undefined,
        process.env.REACT_APP_API_KEY
      );
      const urls = [urlObj.locationUrlByCoordinates(), urlObj.oneCallUrl()];
      try {
        const requests = urls.map((url) => fetch(url));
        const [locationData, weatherData] = await Promise.all(
          requests
        ).then((responses) => Promise.all(responses.map((res) => res.json())));
        setData(weatherData);
        setCountry({
          country: locationData.sys.country,
          city: locationData.name,
        });
        setIsLoading(false);
      } catch {
        setError("An error has occurred");
        setIsLoading(false);
      }
    }
    fetchData();
  }, [coords]);
  useEffect(() => {
    if (params === "") {
      return;
    }
    const urlObj = new GenerateUrl(
      undefined,
      undefined,
      params,
      process.env.REACT_APP_API_KEY
    );

    async function fetchData() {
      setIsLoading(true);
      try {
        const dataCoord = await fetch(urlObj.locationUrlByQuery()).then((res) =>
          res.json()
        );
        urlObj.lon = dataCoord.coord.lon;
        urlObj.lat = dataCoord.coord.lat;
        const dataWeather = await fetch(urlObj.oneCallUrl()).then((res) =>
          res.json()
        );
        setData(dataWeather);
        setCountry({ country: dataCoord.sys.country, city: dataCoord.name });
        setIsLoading(false);
      } catch {
        setError("An error has occurred");
        setIsLoading(false);
      }
    }
    fetchData();
  }, [params]);
  if (coords === null) {
    return null;
  }
  return (
    <Fragment>
      <Search
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {data === null ? (
        <Loader />
      ) : (
        <Display
          data={data}
          country={country}
          isLoading={isLoading}
          error={error}
        />
      )}
      {data && !isLoading && !error && <Footer />}
    </Fragment>
  );
}

export default geolocated()(Main);
