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

// Here I create a function to generate a password based on needed criteria by the name given to the function before
function generatePassword() {

  // Define character sets to be used in the password generation
  var lowercaseCharacters = "qwertyuiopasdfghjklñzxcvbnm";
  var uppercaseCharacters = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
  var numericCharacters = "0123456789";
  var specialCharacters = "!#$%&/()=?¡'¿´+{}[]-_.,:;<>`^|°¬~*";

  let characters = "";
  let password = "";

  // Here we ask the user for the length of the password
  let length = parseInt(prompt("Enter the password length (8-128 characters):"));

  // Here we alidate length input, using isNaN to check if the input is not a number
  // and a while loop to keep asking the user for a valid input until they give one that is valid
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid input. Enter a valid password length (8-128 characters):"));
  }

  // Here we ask the user for character types to include, a prompt for each character type
  var addLowcase = confirm("Would you like to add lowercase characters?");
  var addUppercase = confirm("Would you like to add characters?");
  var addNumber = confirm("Would you like to add characters?");
  var addSpecial = confirm("Would you like to add characters?");

  // Here we validate that the user selected at least one character type
  // Here we use a while to keep asking the user for a valid input until they give one that is valid
  while (!addLowcase && !addUppercase && !addNumber && !addSpecial) {
    alert("Please select at least one character type.");
    addLowcase = confirm("Would you like to add lowercase characters?");
    addUppercase = confirm("Would you like to add uppercase characters?");
    addNumber = confirm("Would you like to add numeric characters?");
    addSpecial = confirm("Would you like to add special characters?");
  }

  // I will be using the console.log() method to check the values of the variables and see
  // if I am getting the expected results after I will comment them out
  //  console.log(addLowcase, addUppercase, addNumber, addSpecial);  

  // we can use the if statement to add the characters to the characters variable 
  // if the user selected them in the confirm prompts
  if (addLowcase) characters += lowercaseCharacters;
  if (addUppercase) characters += uppercaseCharacters;
  if (addNumber) characters += numericCharacters;
  if (addSpecial) characters += specialCharacters;

  //  console.log(characters);

  // Generate the password by randomly selecting characters from the combined character set with a for loop
  // the += operator is used to add the randomly selected character to the password string
  // and the chartAt() method is used to select a character from the characters string at a random index
  // I use the Math.floor() method to round the random number down to the nearest integer
  // and the Math.random() method to generate a random number between 0 and 1
  // add a -1 to the random number to make sure it is between 0 and the length of the characters string
  for (let i = 0; i < length; i++) {
    rdm = Math.floor(Math.random() * characters.length);
    password += characters.charAt(rdm - 1);
    //  console.log(rdm);
    //  console.log(password);
  }

  // Return the generated password
  return password;
}
