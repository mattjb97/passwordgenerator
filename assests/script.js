// Assignment Code

//my code goes here 
// Assignment Code
var generateBtn = document.querySelector("#generate");

var Lower = ["abcdefghijklmnopqrstuvwxyz"];
var Upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var Numbers = [1234567890];
var Characters = ["!@#$%^&*()_+={[}]';:?><"];




// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
//no need to touch
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
