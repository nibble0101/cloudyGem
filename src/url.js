function GenerateUrl(lat, lon, key) {
  this.baseUrl = "https://api.openweathermap.org/data/2.5/onecall";
  this.lat = lat;
  this.lon = lon;
  this.units = "metric";
  this.key = key;
  this.excluded = ["current", "minutely", "hourly"];
  this.url = function () {
    return (
      this.baseUrl +
      "?" +
      "lat=" +
      this.lat +
      "&" +
      "lon=" +
      this.lon +
      "&" +
      "units=" +
      this.units +
      "&" +
      "exclude=" +
      this.excluded.join(",") +
      "&" +
      "appid=" +
      this.key
    );
  };
}

export default GenerateUrl;