(function(){
  function palindrome(str) {
    var newStr = str.replace(/[A-Z0-9]/ig, "").toLowerCase();
    var rev = newStr.split("").reverse().join("");
  if (rev == newStr) {
    return true;
  }  else {
      return false; }
  }
  module.exports = palindrome;

})()

