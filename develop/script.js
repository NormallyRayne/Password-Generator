// Assignment code here
// Generate a random number within a given range
function generateRandomNumber(min, max) {
    var randomNumber = Math.random();
    var randomNumberUpToMax = randomNumber * max;
    var randomNumberInRange = min + randomNumberUpToMax;
    return Math.floor(randomNumberInRange);
  }
  
  // Get a random value from an array
  function getRandomValueFromArray(array) {
    var randomArrayPosition = generateRandomNumber(0, array.length);
    return array[randomArrayPosition];
  }
  
  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChars = ["~", "!", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+"];
  
  function generatePassword() {
    var password = "";
    var passwordLength = prompt("How many characters would you like the password to have? Select a number between 8 and 128");
    console.log("passwordlength: ", passwordLength);
  
    // Validation, so it doesn't drop an error
    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Enter a number between 8 and 128");
    }
  
    var includeLowercase = confirm("Would you like to include lowercase characters?");
    console.log("Include lowercase: " + includeLowercase);
    var includeUppercase = confirm("Would you like to include uppercase characters?");
    console.log("Include uppercase: " + includeUppercase);
    var includeNumeric = confirm("Would you like to include numeric characters?");
    console.log("Include numeric: " + includeNumeric);
    var includeSpecial = confirm("Would you like to include special characters?");
    console.log("Include special: " + includeSpecial);
  
    while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("Select at least one character type");
      includeLowercase = confirm("Would you like to include lowercase characters?");
      includeUppercase = confirm("Would you like to include uppercase characters?");
      includeNumeric = confirm("Would you like to include numeric characters?");
      includeSpecial = confirm("Would you like to include special characters?");
    }
  
    var characterset = "";
    if (includeLowercase) {
      characterset += lowercaseChars.join("");
    }
    if (includeUppercase) {
      characterset += uppercaseChars.join("");
    }
    if (includeNumeric) {
      characterset += numericChars.join("");
    }
    if (includeSpecial) {
      characterset += specialChars.join("");
    }
  
    for (var i = 0; i < passwordLength; i++) {
      password += getRandomValueFromArray(characterset);
    }
  
    return password;
  }
  
  // Get references to the #generate element
  var generateButton = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateButton.addEventListener("click", writePassword);
  