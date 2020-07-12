import React, { Fragment, useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Weather from "../Weather";
import Search from "./Search";
import GenerateUrl from "./url";
import Display from "../weather/Display";
import Error from "../error/Error";
import Loader from "./Loader";
const urlLocationApi = "https://json.geoiplookup.io";
function Main() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    const coord = { lat: null, lon: null };
    async function fetchData() {
      setIsLoading(true);
      await fetch(urlLocationApi)
        .then((response) => response.json())
        .then((data) => {
          coord.lat = data.latitude;
          coord.lon = data.longitude;
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
          setIsLoading(false);
        })
        .catch((err) => setError(err));
      
    }
    fetchData();
  }, []);
  return (
    <Fragment>
      <Search value={country} />
      {isLoading && <Loader />}
      {error && <Error />}
      {data && <Display data={data} />}
      {data && <Footer />}
    </Fragment>
  );
}

export default Main;
