///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////




// a function to generate password

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  var Password= "";
//1. Adding variable of Character to use in random password
//2. Password length from 8 to 128 characters.
//3. Send out an alert if not choosen.
//4.setting choice to use upper character, lower character,number, and symbols.
//5.generate password.

//Global var

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numericvalue = "0123456789";
  var specialsymbol = "!@#$%^&*()-+=~?<>";

//Password length choice from 8 to 128 characters
  var pslength = prompt("Choose a number between 8 through 128 for you password length");
  if (pslength >=7){
    if (pslength >=8 && pslength <= 128){
      
    }
  }

}