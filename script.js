
var generateBtn = document.getElementById("generate");

var numberStr = "1234567890";
var specialCharStr = "!@#$%^&*(){}|[],./<>?";
var upperCharStr = "ABCDEFGHIJKLMNOPQUVWXYZ";
var lowerCharStr = upperCharStr.toLowerCase();

var numberArr = numberStr.split("");
var upperCharArr = upperCharStr.split("");
var lowerCharArr = lowerCharStr.split("");
var specialCharArr = specialCharStr.split("");

var passwordArr = [];
var userChoicePoolArr = [];
var userChoiceLength = [];

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passLength = parseInt(
          prompt('How many characters would you like your password to contain?')
      );
    
      if (passLength < 8) {
        alert('Password length must be at least 8 characters.')
      };

      if (isNaN(passLength) === true) {
          alert('Password length must be provided as a number.')
      };

      // check to make sure they chose between 8- 128 characters
      console.log(passLength);

  var includeNumbers = confirm("Include numerical characters?");
  var includeSymbols = confirm("Include symbols?");
  var includeUpper = confirm("Include uppercase characters?");
  var includeLower = confirm("Include lowercase characters?");
};

for (var i = 0; i < numberArr.length; i++) {
  userChoicePoolArr.push(numberArr[i]);
}
console.log("userChoicePoolArr: ", userChoicePoolArr);

for (var i = 0; i < upperCharArr.length; i++) {
  userChoicePoolArr.push(upperCharArr[i]);
}
console.log("userChoicePoolArr: ", userChoicePoolArr);

for (var i = 0; i < lowerCharArr.length; i++) {
  userChoicePoolArr.push(lowerCharArr[i]);
}
console.log("userChoicePoolArr: ", userChoicePoolArr);

for (var i = 0; i < specialCharArr.length; i++) {
  userChoicePoolArr.push(specialCharArr[i]);
}
console.log("userChoicePoolArr: ", userChoicePoolArr);

// Using random method to create index to the pool for password
for (var i = 0; i < userChoiceLength; i++) {
  var index = Math.floor(Math.random() * userChoicePoolArr.length ) ;
  passwordArr.push(userChoicePoolArr[index]);
}
console.log("passwordArr: ", passwordArr);

// Making sure at least one char of user's choice is included
// Provided user has selected numbers
var indexNumbers = Math.floor(Math.random() * numberArr.length);
var pwdIndex = 0;

passwordArr[pwdIndex++] = numberArr[indexNumbers];

// Provided user has selected uppercase chars
var indexUppers = Math.floor(Math.random() * upperCharArr.length);
passwordArr[pwdIndex++] = upperCharArr[indexUppers];

// Provided user has selected lowercase chars
var indexLowers = Math.floor(Math.random() * lowerCharArr.length);
passwordArr[pwdIndex++] = lowerCharArr[indexLowers];

// Provided user has selected special chars
var indexSpecial = Math.floor(Math.random() * specialCharArr.length);
passwordArr[pwdIndex++] = specialCharArr[indexSpecial];

console.log("passwordArr: ", passwordArr);

//object to store the user input
function getInputValue() {
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("password").value;
  
  // Displaying the value
  alert(inputVal);
};

TODO: // console log returns 4 char length password twice
// password doesnt get written to box
// prompts dont work anymore

function writePassword() {
  var passwordText = document.getElementById("password");
  
  passwordText.value = passwordArr;

};
