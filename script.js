var generateBtn = document.getElementById("generate");

var numberStr = "1234567890";
var specialCharStr = "!@#$%^&*(){}|[],./<>?";
var upperCharStr = "ABCDEFGHIJKLMNOPQUVWXYZ";
var lowerCharStr = upperCharStr.toLowerCase();

var numberArr = numberStr.split("");
var upperCharArr = upperCharStr.split("");
var lowerCharArr = lowerCharStr.split("");
var specialCharArr = specialCharStr.split("");

// var passwordArr = [];
var userChoice = [];
var lengthPassword = 0;

function generatePassword() {
  var passwordArr = [];
  console.log("password");
  var passLength = parseInt(prompt("How many characters would you like your password to contain?"))

  if (passLength < 8) {
    alert("Password length must be at least 8 characters.");
  }

  if (passLength < 128) {
    alert("Password length must be no more than 128 characters.");
  }

  if (isNaN(passLength) === true) {
    alert("Password length must be provided as a number.");
  }

  var includeNumbers = confirm("Include numerical characters?");
  var includeUpper = confirm("Include uppercase characters?");
  var includeLower = confirm("Include lowercase characters?");
  var includeSymbols = confirm("Include special characters?");

  if (includeNumbers === true) {
    for (var i = 0; i < numberArr.length; i++) {
      userChoice.push(numberArr[i]);
    }
    console.log("userChoice: ", userChoice);
  }

  if (includeUpper === true) {
    for (var i = 0; i < upperCharArr.length; i++) {
      userChoice.push(upperCharArr[i]);
    }
    console.log("userChoice: ", userChoice);
  }

  if (includeLower === true) {
    for (var i = 0; i < lowerCharArr.length; i++) {
      userChoice.push(lowerCharArr[i]);
    }
    console.log("userChoice: ", userChoice);
  }

  if (includeSymbols === true) {
    for (var i = 0; i < specialCharArr.length; i++) {
      userChoice.push(specialCharArr[i]);
    }
    console.log("userChoice: ", userChoice);
  }

  for (var i = 0; i < passLength; i++) {
    var index = Math.floor(Math.random() * userChoice.length);
    passwordArr.push(userChoice[index]);
  }

  return (passwordArr.join(""))
}

generateBtn.addEventListener("click", writePassword);

// Using random method to create index to the pool for password
// for (var i = 0; i < lengthPassword; i++) {
//   var index = Math.floor(Math.random() * userChoice.length);
//   passwordArr.push(userChoice[index]);
// }

// Making sure at least one char of user's choice is included
// Provided user has selected numbers
// var indexNumbers = Math.floor(Math.random() * numberArr.length);
// var pwdIndex = [];

// passwordArr[pwdIndex++] = numberArr[indexNumbers];

// // Provided user has selected uppercase chars
// var indexUppers = Math.floor(Math.random() * upperCharArr.length);
// passwordArr[pwdIndex++] = upperCharArr[indexUppers];

// // Provided user has selected lowercase chars
// var indexLowers = Math.floor(Math.random() * lowerCharArr.length);
// passwordArr[pwdIndex++] = lowerCharArr[indexLowers];

// // Provided user has selected special chars
// var indexSpecial = Math.floor(Math.random() * specialCharArr.length);
// passwordArr[pwdIndex++] = specialCharArr[indexSpecial];

// console.log("passwordArr: ", passwordArr);

//object to store the user input
function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("password").value;

  // Displaying the value
  alert(inputVal);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}
