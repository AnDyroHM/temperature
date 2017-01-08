var expect = require('chai').expect;
var axios = require('axios');

describe('Temperature Conversor API', function(done){
  describe('Celsius to Fahrenheit conversion', function(){
    it('returns status 200', function(done){
      axios
        .get('http://localhost:3000/toFahrenheitfC?temperature=100')
        .then(function(res){
          expect(res.status).to.equal(200);
          done();
        })
    })

    it('returns 100C in Fahrenheit', function(done){
      axios
        .get('http://localhost:3000/toFahrenheitfC?temperature=100')
        .then(function(res){
          expect(res.data).to.equal(212);
          done();
        })
    })
  })
  describe('Fahrenheit to Celsius conversion', function(done){
    it('returns status 200', function(done){
      axios
        .get('http://localhost:3000/toCelsiusfF?temperature=212')
        .then(function(res){
          expect(res.status).to.equal(200);
          done();
        })
    })

    it('returns 212F in Celsius', function(done){
      axios
        .get('http://localhost:3000/toCelsiusfF?temperature=212')
        .then(function(res){
          expect(res.data).to.equal(100);
          done();
        })
    })
  })

  describe('Celsius to Kelvin conversion', function(done){
    it('returns status 200', function(done){
      axios
        .get('http://localhost:3000/toKelvinfC?temperature=100')
        .then(function(res){
          expect(res.status).to.equal(200);
          done();
        })
    })

    it('returns 373.15 in Kelvin', function(done){
      axios
        .get('http://localhost:3000/toKelvinfC?temperature=100')
        .then(function(res){
          expect(res.data).to.equal(373.15);
          done();
        })
    })
  })

  describe('Kelvin to Celsius conversion', function(done){
    it('returns status 200', function(done){
      axios
        .get('http://localhost:3000/toCelsiusfK?temperature=373.15')
        .then(function(res){
          expect(res.status).to.equal(200);
          done();
        })
    })

    it('returns 100 in Celsius', function(done){
      axios
        .get('http://localhost:3000/toCelsiusfK?temperature=373.15')
        .then(function(res){
          expect(res.data).to.equal(100);
          done();
        })
    })
  })
})
