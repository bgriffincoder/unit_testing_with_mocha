(function() {

    let cherokeeHare = (startingPopulation, birthRate, numberOfWeeks) => {
        for(i=0;i < numberOfWeeks; i++) {
            let totalHares = startingPopulation * birthRate;
            startingPopulation = totalHares + startingPopulation;
          }
          return Math.floor(startingPopulation);
    }

    module.exports = cherokeeHare;
    // let startingPopulation = 200;
    // let birthRate = 0.1;
    // let numberOfWeeks = 5;
    // let totalHares = 0;
  
    // for(i=0;i < numberOfWeeks; i++) {
    //   totalHares = startingPopulation * 0.1;
    //   startingPopulation = totalHares + startingPopulation;
    // }
    // console.log("There will be " + startingPopulation + " Cherokee Hares after " + numberOfWeeks + " weeks.");
  })()