(function() {
  
  let myArray = [];
  let remainder = 0;
  let dollars = 0;
  let changeMachine = (amount) => {
    remainder = amount % 20;
    dollars = Math.floor(amount/20)
    if(dollars==0) {
      myArray.push(0);
    } else {
      myArray.push(dollars);
      amount = remainder;
    }
    
    dollars = Math.floor(amount/10);
    if(dollars==0) {
      myArray.push(0);
    } else {
      remainder = amount % 10;
      amount = remainder;
      myArray.push(dollars);
    }
    
    dollars = Math.floor(amount/5);
    if(dollars==0){
      myArray.push(0);
    } else {
      remainder = amount % 5;
      amount = remainder;
      myArray.push(dollars);
    }
    
    dollars = Math.floor(amount/1);
    if(dollars==0) {
      myArray.push(0);
    } else {
      remainder = amount % 1;
      amount = remainder;
      myArray.push(dollars);
    }
    return myArray.toString();
  } 
  
  module.exports = changeMachine;
  
  })();
  