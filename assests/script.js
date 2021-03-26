// Assignment Code

//my code goes here 

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//no need to touch
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
