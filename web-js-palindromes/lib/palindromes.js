function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("").replace(/\s/g, "");
  return s.replace(/\s/g, "") == stringReverse;
}

module.exports = isPalindrome;


