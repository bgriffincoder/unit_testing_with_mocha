
  var changeMachine = require('../changeMachine');
  var chai = require('chai');
  var expect = chai.expect;
  
  
  describe('Testing changeMachine()', function() {
    context('given change of 47', function() {
      it('it returns array of [ 2, 0, 1, 2 ]', function() {
        var changeArray = changeMachine(47);
        expect(changeArray).to.equal("2,0,1,2"); //chai does this
      });
    });

  }); //describe changeMachine()  
