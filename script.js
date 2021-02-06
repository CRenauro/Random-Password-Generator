//array of options
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var symbol = ['!','@','#','$','%','^','&','*','(',')','?','{','}','/',];
var numArr = [''];

// prompts questions when generate button is pushed - NOT WORKING

document.getElementById("generate").addEventListener('click', prompt);


//user passsord options - NOT WORKING
function userpasswordOptions(){
  var passLength = parseInt(
      prompt('How many characters would you like your password to contain?')
  );

  if (isNaN(passLength) === true) {
      alert('Password length must be provided as a number.')
  };
  
  if (passLength < 8) {
    alert('Password length must be at least 8 characters.')
    return;
  };
  // check to make sure they chose between 8- 128 characters
  console.log(passLength);
}



// prompt for what characters - WORKING

var includeNumbers = confirm("Include numerical characters?");
var includeSymbols = confirm("Include symbols?");
var includeUpper = confirm("Include uppercase characters?");
var includeLower = confirm("Include lowercase characters?");


//object to store the user input
function getInputValue(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("password").value;
  
  // Displaying the value
  alert(inputVal);
  return;
}


// function to randomize so that we can give the password  (will use math.random to generate that).
var password = "" 
// Pick a random number from numArr.

const pick = numArr;

console.log(pick);
console.log(
    numArr[Math.floor(Math.random() * numArr.length)]
             );

// an array w the results, an array for possible characters, 
// and set an array for guarenteed characters (characters guarenteed for pw)

get_random = function (list) {
  return list[Math.floor((Math.random()*list.length))];
} 

get_random([]);

console.log(Array.from('numArr'));

// then we will creat a loop that goes through the results array
// Once we push into a new array (results array), using join we will take the characters from results array and turn into a string
var elements = ['lowercase', 'uppercase', 'numbers', 'symbols'];

console.log(elements.join());


console.log(elements.join(''));


console.log(elements.join('-'));



// After we turn into a string, we write the password 
// to the page using(.value)

var numArr = ['']; 
console.log(Object.values(check));


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


