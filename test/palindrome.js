
  var palindrome = require('../palindrome');
  var chai = require('chai');
  var expect = chai.expect;
  
  
    describe('Testing palindrome()', function() {
      context('give word of racecar', function() {
        it('it returns true', function() {
          var palindromeBoolean = palindrome("racecar");
          expect(palindromeBoolean).to.equal(true); //chai does this
        });
      });
  
    }); //describe palindrome()  
