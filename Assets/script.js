// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = parseInt(prompt("Password Length?"))
  var useSpecial = prompt("Do you want to use special characters?")
  var useUpper = prompt("Do you want to use uppercase characters?")
  var useLower = prompt("Do you want to use lowercase characters?")
  var useNumeric = prompt("Do you want to use numeric characters?")

  if (useSpecial == "yes"){
    useSpecial= true
  }
  else if (useSpecial == "no"){
    useSpecial= false
  }

  if (useUpper == "yes"){
    useUpper= true
  }
  else if (useUpper == "no"){
    useUpper= false
  }

  if (useLower == "yes"){
    useLower= true
  }
  else if (useLower == "no"){
    useLower= false
  }

  if (useNumeric == "yes"){
    useNumeric= true
  }
  else if (useNumeric == "no"){
    useNumeric= false
  }

  var password = generatePassword(passwordLength, useSpecial, useUpper, useLower, useNumeric);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(passwordLength, useSpecial, useUpper, useLower, useNumeric){
  var specialcharacters= " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  var uppercaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseChar="abcdefghijklmnopqrstuvwxyz"
  var numbers="1234567890"

  var vocabulary = ""

  if (useSpecial) {
    vocabulary += specialcharacters
  }
  if (useUpper) {
    vocabulary += uppercaseChar
  } 
  if (useLower) {
    vocabulary += lowercaseChar
  }
  if (useNumeric) {
    vocabulary += numbers
  }

  var generatedPassword = ""
  for (let i = 0; i < passwordLength; i++){
    var randomIdx = getRandomInt(vocabulary)
    generatedPassword += vocabulary.charAt(randomIdx)
  }
  return generatedPassword

}

function getRandomInt (vocabulary){
  return Math.floor(Math.random() * vocabulary.length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
