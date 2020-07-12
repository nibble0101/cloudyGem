const iconUrlObject = {
  baseUrl: "http://openweathermap.org/img/wn/",
  weatherIcon: null,
  urlExtension: "@2x.png",
  set icon(icon) {
    this.weatherIcon = icon;
  },
  get url() {
    return this.baseUrl + this.weatherIcon + this.urlExtension;
  },
};

function dateFormatter(time) {
  const d = new Date(time * 1000).toDateString().split(" ");
  return d[0] + " " + d[1] + " " + d[2] + ", " + d[3];
}
function setSunTime(time, offset) {
  const curr = new Date(time * 1000),
    clientOffset = curr.getTimezoneOffset() * 60 * 1000,
    newTime = new Date(curr.getTime() + clientOffset + offset * 1000);
  return newTime.toLocaleTimeString();
}

export { iconUrlObject, dateFormatter, setSunTime };
