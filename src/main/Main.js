import React, { Fragment, useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Search from "./Search";
import GenerateUrl from "./url";
import Display from "../weather/Display";
import Error from "../error/Error";
import Loader from "./Loader";
const urlLocationApi = "https://json.geoiplookup.io";
const urlFirstFetch = "https://api.openweathermap.org/data/2.5/weather?q=";
function Main() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [params, setParams] = useState("");
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    setParams(value);
    e.preventDefault();
  };
  useEffect(() => {
    const coord = { lat: null, lon: null, country: null, city: null };
    async function fetchData() {
      setIsLoading(true);
      await fetch(urlLocationApi)
        .then((response) => response.json())
        .then((data) => {
          coord.lat = data.latitude;
          coord.lon = data.longitude;
          coord.country = data.country_name;
          coord.city = data.city;
        })
        .catch((err) => setError(err));
      const urlObj = new GenerateUrl(
        coord.lat,
        coord.lon,
        process.env.REACT_APP_API_KEY
      );
      await fetch(urlObj.url())
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setCountry({ country: coord.country, city: coord.city });
          setIsLoading(false);
        })
        .catch((err) => setError(err));
    }
    fetchData();
  }, []);
  useEffect(() => {
    if (!params) {
      return;
    }
    const url =
      urlFirstFetch + params + "&appid=" + process.env.REACT_APP_API_KEY;
    async function fetchData() {
      setIsLoading(true);
      setError(null)
      try {
        const dataCoord = await fetch(url).then((res) => res.json());
        const urlObj = new GenerateUrl(
          dataCoord.coord.lat,
          dataCoord.coord.lon,
          process.env.REACT_APP_API_KEY
        );

        const dataWeather = await fetch(urlObj.url()).then((res) => res.json());
        setData(dataWeather);
        setCountry({ country: dataCoord.sys.country, city: dataCoord.name });
        setIsLoading(false);
      } catch {setError("error")}
    }
    fetchData();
  }, [params]);
  return (
    <Fragment>
      <Search
        value={value}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {isLoading && <Loader />}
      {error && <Error />}
      {data && country && !isLoading && (
        <Display data={data} country={country} />
      )}
      {data && !isLoading && <Footer />}
    </Fragment>
  );
}

export default Main;
