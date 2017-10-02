var hangmanLite = require('../hangman_lite');
var chai = require('chai');
var expect = chai.expect;


  describe('Testing hangmanLite()', function() {
    context('given word of zipper and letter of p', function() {
      it('it returns true', function() {
        var hangmanBoolean = hangmanLite("zipper","p");
        expect(hangmanBoolean).to.equal(true); //chai does this
      });
    });

  }); //describe hangmanLite()
