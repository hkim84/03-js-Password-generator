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

  //1. Adding variable of Character to use in random password
  //2. Password length from 8 to 128 characters.
  //3. Send out an alert if not choosen.
  //4.setting choice to use upper character, lower character,number, and symbols.
  //5.generate password.

  //Global var
  // arrays square bracket commas
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numericvalue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialsymbol = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


  //Password length choice from 8 to 128 characters
    var pwans = prompt("choose between a number from 8 through 128 for you password length");
    if (pwans < 8 || pwans > 128) {
      return "please choose a number between 8 and 128.";
    } else if (isNaN(pwans)) {
      pwans = prompt("enter a valid number");
    }
    else {
      alert("your password will be " + pwans + " the password length.");
    }
  //Password confirmation of character to use upper,lower,numeric,specials
    tcupcase = confirm("would you like an uppercase character?");
    if (tcupcase) {
      var upper = alert("password will contain uppercase characters");
    }
    else {
      alert("password will not contain uppercase characters");
    }

    tclocase = confirm("would you like an lowercase character?");
    if (tclocase) {
      alert("password will contain lowercase characters");
    }
    else {
      alert("password will not contain lowercase characters");
    }

    tcnvalue = confirm("would you like an numeric value character?");
    if (tcnvalue) {
      alert("password will contain numeric value characters");
    }
    else {
      alert("password will not contain numeric value characters");
    }

    tcssymbol = confirm("would you like an special symbol character?");
    if (tcssymbol) {
      alert("password will contain special symbol characters");
    }
    else {
      alert("password will not contain special symbol characters");
    }

  
generatePassword();}