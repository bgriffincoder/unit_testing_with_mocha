class Person {
    constructor(dob) {
        this.dob = new Date(dob);
    }

    age() {
        var ageDiff = new Date(Date.now() - this.dob);
        return Math.abs(ageDiff.getUTCFullYear() - 1970);
    }

    whatCanIDo() {
        var what = [];

        var age = this.age();

        if(age >= 18) {
            what.push("vote");
        }

        if(age >= 21) {
            what.push("drink");
        }

        if(age >= 25) {
            what.push("congress");
        }

        if(age >= 30) {
            what.push("senator");
        }

        if(age >= 35) {
            what.push("president");
        }

        return what;
        
    }
}

  
  module.exports = Person;