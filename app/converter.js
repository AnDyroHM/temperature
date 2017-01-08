module.exports.toFahrenheitfC = function(temperature){
  return (temperature * 1.8) + 32;
}

module.exports.toCelsiusfF = function(temperature){
  return (temperature - 32) / 1.8;
}

module.exports.toKelvinfC = function(temperature){
  return temperature + 273.15;
}

module.exports.toCelsiusfK = function(temperature){
  return temperature - 273.15;
}
