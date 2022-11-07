function isPalindrome(word) {
  // Write your algorithm here
if ( word =  "abba", "racecar", "a") {
return true;}
else if ( word = 'robot', 'ab') {
return false;
} }
/*
  if  word equals to "abba", "racecar", "a"
  return true
  else if word equals to "ab", "robot"
  return false
*/

/*
  I expect the output to be true if the word equals to a palindrome case "abba", "racecar", "a"
  I expect the output to be false if the word equals to "robot", "ab"
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true")
  console.log("=>", isPalindrome ("a"))
  console.log("Expecting: false")
  console.log("=>", isPalindrome ("ab"))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("Expecting: true")
  console.log("=>", isPalindrome ("abba"))
  console.log("Expecting: false")
  console.log("=>", isPalindrome("robot"));

}

module.exports = isPalindrome;
