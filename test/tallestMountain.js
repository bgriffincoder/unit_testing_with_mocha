var tallestMountain = require('../tallestMountain');
var chai = require('chai');
var expect = chai.expect;


  describe('Testing tallestMountain', function() {
    context('given mountain heights of [1,2,3]', function() {
      it('it returns 3 as the tallest mountain ', function() {
        var tallest = tallestMountain([1,2,3]);
        expect(tallest).to.equal(3); //chai does this
      });
    });

  }); //describe tallestMountain()
