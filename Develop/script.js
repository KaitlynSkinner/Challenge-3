// Assignment code here
var numbers = "0123456789"
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var userChoice = ""

var generatePassword = function() {
  var chooseLength = window.prompt("How many characters would you like your password to contain?");
  console.log(chooseLength);

  if (chooseLength < 8 || chooseLength > 128) {
    window.alert("Password length must be at least 8 characters");
    return;
  }

  var promptSpecial = window.confirm(
    "Click OK to confirm including special characters."
  );
  console.log(promptSpecial);
  if (promptSpecial === true) {
    userChoice = userChoice + symbols;
  }

  var promptNumeric = window.confirm(
    "Click OK to confirm including numeric characters."
  );
  console.log(promptNumeric);
  if (promptNumeric === true) {
    userChoice = userChoice + numbers;
  }

  var promptUppercase = window.confirm(
    "Click OK to confirm including UPPERCASE characters."
  );
  console.log(promptUppercase);
  if (promptUppercase === true) {
    userChoice = userChoice + upperCase;
  }
  var promptLowercase = window.confirm(
    "Click OK to confirm including lowercase characters."
  );
  console.log(promptLowercase);
  if (promptLowercase === true) {
    userChoice = userChoice + lowerCase;
  }
  console.log(userChoice);

var passwordUsed = ""

for (var i = 0; i < chooseLength; i++) {
  var randomNumber = Math.floor(Math.random() * userChoice.length);

  passwordUsed = passwordUsed + userChoice[randomNumber];

  console.log(userChoice[randomNumber]);
  console.log(passwordUsed);
}
return passwordUsed;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);