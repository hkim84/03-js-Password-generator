// Assignment code here

// Get references to the #generate element
// button generator
var generateBtn = document.querySelector("#generate");

// Adding variabl keys to the password
var {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

// Write password to the #password input
//inputting password in computer
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


