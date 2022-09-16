const ftoc = function(temperature) {
  let temperatureF = (temperature - 32) * (5/9);
  temperatureF = Math.round(temperatureF * 10) / 10;
  return temperatureF;
};

const ctof = function(temperature) {
  let temperatureC = temperature * (9/5) + 32;
  temperatureC = Math.round(temperatureC * 10) / 10;
  return temperatureC;s
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
