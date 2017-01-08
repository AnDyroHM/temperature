var expect = require('chai').expect;
var converter = require('..');

describe('Temperature Conversor', function(){
  describe('Celsius to Fahrenheit Conversor', function(){
    it('Converts 100C to Fahrenheit', function(){
      var fh = converter.toFahrenheitfC(100);
      expect(fh).to.equal(212);
    })
  })

  describe('Fahrenheit to Celsius Conversor', function(){
    it('Converts 212F to Celsius', function(){
      var fh = converter.toCelsiusfF(212);
      expect(fh).to.equal(100);
    })
  })

  describe('Celsius to Kelvin Conversor', function(){
    it('Converts 100C to Kelvin', function(){
      var fh = converter.toKelvinfC(100);
      expect(fh).to.equal(373.15);
    })
  })

  describe('Kelvin to Celsius Conversor', function(){
    it('Converts 373.15K to Celsius', function(){
      var fh = converter.toCelsiusfK(373.15);
      expect(fh).to.equal(100);
    })
  })
})
