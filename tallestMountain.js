(function() {
    function tallestMountain(mtns) {
        let biggestMountain = Math.max.apply(Math, mtns);
        return biggestMountain;
    }

    module.exports = tallestMountain;

})();