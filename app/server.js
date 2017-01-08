var express = require('express');
var converter = require('..');
var app = express();

app.get('/toCelsiusfF', function(req, res){
  var temperature = req.query.temperature;
  res.status(200).send(converter.toCelsiusfF(temperature));
})

app.get('/toFahrenheitfC', function(req, res){
  var temperature = req.query.temperature;
  res.status(200).send(converter.toFahrenheitfC(temperature));
})

app.get('/toKelvinfC', function(req, res){
  var temperature = req.query.temperature;
  res.status(200).send(converter.toKelvinfC(temperature));
})

app.get('/toCelsiusfK', function(req, res){
  var temperature = req.query.temperature;
  res.status(200).send(converter.toCelsiusfK(temperature));
})

app.listen(3000);
