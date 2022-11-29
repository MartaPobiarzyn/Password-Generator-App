// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //using prompt() --> returns user input value as a string

  var password_length = prompt("Choose your password length. It must be between 10-64 characters.")

  var password_length = parseInt(password_length);


  while (
    !(
      password_length >= 10 &&
      password_length <= 64 &&
      Number.isInteger(password_length)
    )
    // (password_length >= 10 || password_length <= 64) && 
    // !(Number.isInteger(password_length))
  ) {
    confirm("Password length does not meet the criteria. Try again.");
    var password_length = prompt("Choose your password length. It must be between 10-64 characters.");
  }

  console.log(password_length);



  var password_lowercase = "n";
  var password_uppercase = "n";
  var password_numeric = "n";
  var password_special = "n";

  while(password_lowercase === "n" && password_uppercase === "n" && password_numeric === "n" && password_special === "n"){
   
  confirm("Please select at least one character type for your password.");

  var password_lowercase = prompt("Do you want to include lowercase characters in your password? Answer 'y' for yes or 'n' for no.")

  while (password_lowercase != "y" && password_lowercase != "n") {
    confirm("Please answer 'y' for yes or 'n' for no.");
    var password_lowercase = prompt("Do you want to include lowercase characters in your password? Answer 'y' for yes or 'n' for no.");
  };

  var password_uppercase = prompt("Do you want to include uppercase characters in your password? Answer 'y' for yes or 'n' for no.")

  while (password_uppercase != "y" && password_uppercase != "n") {
    confirm("Please answer 'y' for yes or 'n' for no.");
    var password_uppercase = prompt("Do you want to include uppercase characters in your password? Answer 'y' for yes or 'n' for no.")
  };

  var password_numeric = prompt("Do you want to include numeric characters in your password? Answer 'y' for yes or 'n' for no.")

  while (password_numeric != "y" && password_numeric != "n") {
    confirm("Please answer 'y' for yes or 'n' for no.");
    var password_numeric = prompt("Do you want to include numeric characters in your password? Answer 'y' for yes or 'n' for no.")
  };

  var password_special = prompt("Do you want to include special characters in your password? Answer 'y' for yes or 'n' for no.")

  while (password_special!= "y" && password_special != "n") {
    confirm("Please answer 'y' for yes or 'n' for no.");
    var password_special = prompt("Do you want to include special characters in your password? Answer 'y' for yes or 'n' for no.")
  };
  }

  password_criteria_input = {
    howlong: password_length,
    lowercase: password_lowercase,
    uppercase: password_uppercase,
    numeric: password_numeric,
    special: password_special
  };

return(password_criteria_input);

  // if (password_lowercase === "n" && password_uppercase === "n" && password_numeric === "n" && password_special === "n") {
  //   confirm("You must select at least one character type.")
  //   prompt("Do you want to include lowercase characters in your password? Answer 'y' for yes or 'n' for no.")
  // }



  //confirm() --> returns a boolean value

  //use of character types - specChars, nums, LC, UC (confirm would you like to use x)
  //then validate that the user selected SOME kind of character, at least one character type
  //what happens if they didn't? send user back to select again (call function)

  //password length
  //validate 10-64 characters
  //what happens if user imput value is not in that range? send user back again (call function)

  //return true/selected character types & password length (will pass through generatePassword)
}

// Function for getting a random array element 
function getRandom(characters_selected, max_length) {
  var rand_number = Math.floor(Math.random()*max_length);
  var rand_character = characters_selected[rand_number];
  return (rand_character);
 
}


// Function to generate password with user input
function generatePassword() {
  //call getPasswordOptions and store that return in a variable
var password_criteria_input = getPasswordOptions();
  //ex: user selected to use UC & LC, length = 12
  //we have to grab a bank of these selected character types - randomly select the characters to use (getRandom function here)

  // these are ternary operators, an alternative to if-else statements that appears to have a simple syntax for simpler if-else statements. I found this out on stack overflow: https://stackoverflow.com/questions/31971801/setting-a-javascript-variable-with-an-if-statement-should-the-var-x-be-in

  var lower_case_characters_selected = password_criteria_input.lowercase === "y" ? lowerCasedCharacters : null;

var upper_case_characters_selected = password_criteria_input.uppercase === "y" ? upperCasedCharacters : null;

var numeric_characters_selected = password_criteria_input.numeric === "y" ? numericCharacters : null;

var special_characters_selected = password_criteria_input.special === "y" ? specialCharacters : null;

// concatenate the arrays, starting with an empty array. This is because you cannot concatenate a null array (e.g if lower_case_characters_selected is null because password_criteria_input.lowercase === "y"), otherwise you get an error

var characters_selected = [].concat(
  lower_case_characters_selected,
  upper_case_characters_selected,
  numeric_characters_selected,
  special_characters_selected
  )

var characters_selected = characters_selected.filter(element => {
  return element !== null
})

  //*create empty array you'll push your values into*
  var password_characters = [];

  //must return the password
  for (var i =0; i < parseInt(password_criteria_input.howlong); i++) {
    var password_character = getRandom(characters_selected, characters_selected.length);
    password_characters.push(password_character);
  } 

  var password_characters_no_commas = password_characters.join('');
  return(password_characters_no_commas);



}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);