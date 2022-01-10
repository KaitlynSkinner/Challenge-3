// Assignment code here
var promptOne = "Click OK to confirm including special characters.";
var promptTwo = "Click OK to confirm including numeric characters.";
var promptThree = "Click OK to confirm including UPPERCASE characters.";
var promptFour = "Click OK to confirm including lowercase characters.";
/*
var randomNumbers = Math.random();
*/
var passwordTextt = function() { 
  var chooseLength = window.prompt("How many characters would you like your password to contain?");
  
  if (chooseLength === 8 || chooseLength === "eight" || chooseLength === "EIGHT" || chooseLength === "Eight") {
    window.alert(promptOne) + (promptTwo) + (promptThree) + (promptFour);
  } else {
      window.alert("Password length must be at least 8 characters");
    }

};


passwordTextt();

/*
// research math.random and also symbols as they seem to not work
/*
var randomNumbers = Math.random();
var lowerCase = " a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z ";
var upperCase = " A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z ";
var symbols = " !, ", #, $, %, &, ', (, ), *,+ , ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, ~ ";
*
var passwordText = function() {
  var numbers = randomNumbers();
  /*
  var lowerCase = ''
  var upperCase = ''
  var symbols = ''
  return "generatePassword"
}


/*
var chooseLength = function() {
  var askMe = prompt("How many characters would you like your password to contain?");

  switch(askMe) {
    case 8:
    case "eight":
      promptScreen();
    default:
      var wrongLength = confirm("Password length must be at least 8 characters.");
      switch(wrongLength) {
        case true:
          promptScreens();
        default:
          alert("Password length must be at least 8 characters.");
          break;
  
      }
  }
};

if (promptScreen <= 8) {
  window.alert("Click OK to confirm including special characters")
}
chooseLength;
/*
var choosenLength = function() {
  var  = ;
  var askMe = ("How many characters would you like you password to include?")

if (chosenLength === 8) {
  prompt("Click OK to confirm including special characters.");
}
else if (chosenLength === 8) {
  prompt("Click OK to confirm including numeric characters.");
}
else if (chosenLength === 8) {
  prompt("Click OK to confirm including UPPERCASE characters.");
}
else if (chosenLength === 8) {
  prompt("Click OK to confirm including lowercase characters.");
}
else {
  var wrongLength = confirm("");
  if(wrongLength) {
    alert("Password length must be at least 8 characters.")
    }
}

chosenLength();
*/


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
