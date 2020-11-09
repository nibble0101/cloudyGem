function GenerateUrl(lat, lon, query = "", key) {
  this.oneCallBaseUrl = "https://api.openweathermap.org/data/2.5/onecall";
  this.locationBaseUrl = "https://api.openweathermap.org/data/2.5/weather";
  this.lat = lat;
  this.lon = lon;
  this.query = query;
  this.units = "metric";
  this.key = key;
  this.excluded = ["current", "minutely", "hourly"];
  this.locationUrlByCoordinates = function () {
    return `${this.locationBaseUrl}?lat=${this.lat}&lon=${this.lon}&appid=${this.key}`;
  };
  this.locationUrlByQuery = function () {
    return `${this.locationBaseUrl}?q=${this.query}&appid=${this.key}`;
  };
  this.oneCallUrl = function () {
    return `${this.oneCallBaseUrl}?lat=${this.lat}&lon=${this.lon}&units=${
      this.units
    }&exclude=${this.excluded.join(",")}&appid=${this.key}`;
  };
}

export default GenerateUrl;
