var Person = require('../person');
var chai = require('chai');
var expect = chai.expect;

describe('Person', function() {

  describe('testing age()', function() {
    context('when dob is 10/20/1992', function() {
      it('returns 24 for persons age', function() {
        var person = new Person('10/20/1992');
        var age = person.age();
        expect(age).to.equal(24); //chai does this
      });
    });

    context('when dob is 09/03/1986', function() {
      it('returns 31 for persons age', function() {
        var person = new Person('09/03/1986');
        var age = person.age();
        expect(age).to.equal(31); //chai does this
      });
    }); //dob is 9.3.1986

    context('when dob is 12/29/1986', function() {
        it('returns 30 for persons age', function() {
          var person = new Person('12/29/1986');
          var age = person.age();
          expect(age).to.equal(30); //chai does this
        });
      }); //dob is 12.29.1986

  }); //describe age()

  describe('testing whatCanIDo()', function() {
    context('when age is 18 or more', function() {
      it('returns vote', function() {
        var person = new Person('1/1/1995');
        var what = person.whatCanIDo();
        expect(what).to.include('vote');
      });
    });

    context('when age is 21 or more', function() {
        it('returns drink', function() {
          var person = new Person('1/1/1992');
          var what = person.whatCanIDo();
          expect(what).to.include('drink');
        });
      });

      context('when age is 25 or more', function() {
        it('returns congress', function() {
          var person = new Person('1/1/1988');
          var what = person.whatCanIDo();
          expect(what).to.include('congress');
        });
      });

      context('when age is 30 or more', function() {
        it('returns senator', function() {
          var person = new Person('1/1/1984');
          var what = person.whatCanIDo();
          expect(what).to.include('senator');
        });
      });

      context('when age is 35 or more', function() {
        it('returns president', function() {
          var person = new Person('1/1/1981');
          var what = person.whatCanIDo();
          expect(what).to.include('president');
        });
      });


  }); //describe whatCanIDo();

}); //describe person