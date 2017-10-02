var cherokeeHare= require('../cherokeeHare');
var chai = require('chai');
var expect = chai.expect;

  describe('Testing cherokeeHare()', function() {
    context(`
            startingPopulation = 200;
            birthRate = 0.1;
            numberOfWeeks = 5;
     `, function() {
      it('it returns 322', function() {
        var howManyHares = cherokeeHare(200,0.1,5);
        expect(howManyHares).to.equal(322); //chai does this
      });
    });

  }); //describe cherokeeHare()
