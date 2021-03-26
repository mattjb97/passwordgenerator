// Assignment Code

//my code goes here 
// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables for the function to choose from to make the passwords 
var Lower = ["abcdefghijklmnopqrstuvwxyz"];
var Upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var Numbers = [1234567890];
var Characters = ["!@#$%^&*()_+={[}]';:?><"];

//selectors to comfirm types of characters in the functions need to call these 
var CheckCharacters = "";
var confirmLower;
var confirmUpper;
var confirmNumbers;
var CheckCharactersacters;



function generatePassword() {

    var CheckCharacters = (prompt("How long would you like your password to be?\n You can choose from 8-128 characters."));
    for (var i = 128; i < CheckCharacters;) {
        alert("Sorry! Your password can only have 128 characters.");
        return;
    }
    for (var i = 8; i > CheckCharacters;) {
        alert("Sorry! Your password must have a minimum of 8 characters.");
        return;
    }

    var PC = "";

    var confirmLower = confirm("Would you like lowercase letters in your password?");
    if (confirmLower) {
        PC = PC.concat(Lower)
    }
    var confirmUpper = confirm("Would you like uppercase letters in your password?");
    if (confirmUpper) {
        PC = PC.concat(Upper)
    }

    var CheckCharactersacters = confirm("Would you like to also add a secret code to your password?");
    if (CheckCharactersacters) {
        PC = PC.concat(Characters)
    }

    var confirmNumbers = confirm("Would you like to add complex coordinates to your password?");
    if (confirmNumbers) {
        PC = PC.concat(Numbers)
    }


    var Password = "";


    for (var i = 0; i < CheckCharacters; i++) {
        Password = Password + PC[Math.floor(Math.random() * PC.length)];

    }
    return Password;

}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
//no need to touch
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
