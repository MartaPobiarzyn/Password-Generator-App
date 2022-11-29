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

  var password_length = prompt("Choose your password length. It must be between 10-64 characters.")
// Converting user's text input into an integer (in order to check if password length meets criteria)
  var password_length = parseInt(password_length);
// The user must not put anything other than an integer between 10 and 64.
// Until these conditions are met, inform the user and prompt them again.
  while (
    !(
      password_length >= 10 &&
      password_length <= 64 &&
      Number.isInteger(password_length)
    )
  ) {
    confirm("Password length does not meet the criteria. Try again.");
    var password_length = prompt("Choose your password length. It must be between 10-64 characters.");
  }

}
// Initialise all choices to 'n' for no.
  var password_lowercase = "n";
  var password_uppercase = "n";
  var password_numeric = "n";
  var password_special = "n";

  
// The user must select at least one character type and they can only input 'y' for yes or 'n' for no.
// If the user selects 'n' for all character types, inform the user and prompt them to choose at least one character type again.
  while (password_lowercase === "n" && password_uppercase === "n" && password_numeric === "n" && password_special === "n") {

    confirm("Please select at least one character type for your password.");

    var password_lowercase = prompt(
      "Do you want to include lowercase characters in your password? Answer 'y' for yes or 'n' for no."
      )

    while (password_lowercase != "y" && password_lowercase != "n") {
      confirm("Please answer 'y' for yes or 'n' for no.");
      var password_lowercase = prompt(
        "Do you want to include lowercase characters in your password? Answer 'y' for yes or 'n' for no."
        );
    };

    var password_uppercase = prompt(
      "Do you want to include uppercase characters in your password? Answer 'y' for yes or 'n' for no."
      )

    while (password_uppercase != "y" && password_uppercase != "n") {
      confirm("Please answer 'y' for yes or 'n' for no.");
      var password_uppercase = prompt(
        "Do you want to include uppercase characters in your password? Answer 'y' for yes or 'n' for no."
        )
    };

    var password_numeric = prompt(
      "Do you want to include numeric characters in your password? Answer 'y' for yes or 'n' for no."
      )

    while (password_numeric != "y" && password_numeric != "n") {
      confirm("Please answer 'y' for yes or 'n' for no.");
      var password_numeric = prompt(
        "Do you want to include numeric characters in your password? Answer 'y' for yes or 'n' for no."
        )
    };

    var password_special = prompt(
      "Do you want to include special characters in your password? Answer 'y' for yes or 'n' for no."
      )

    while (password_special != "y" && password_special != "n") {
      confirm("Please answer 'y' for yes or 'n' for no.");
      var password_special = prompt(
        "Do you want to include special characters in your password? Answer 'y' for yes or 'n' for no."
        )
    };
  }
// Storing length of password and character type choices.
  password_criteria_input = {
    howlong: password_length,
    lowercase: password_lowercase,
    uppercase: password_uppercase,
    numeric: password_numeric,
    special: password_special
  };

  return (password_criteria_input);


// Function for getting a random array element 
function getRandom(characters_selected, max_length) {
// Generates a random integer between 0 and 1, then scales it to a given max length (the number of characters to choose from).
  var rand_number = Math.floor(Math.random() * max_length);
// Indexes the array to return a random character.
  var rand_character = characters_selected[rand_number];
  return (rand_character);

}


// Function to generate password with user input
function generatePassword() {
  //call getPasswordOptions and store that return in a variable
  var password_criteria_input = getPasswordOptions();

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
  for (var i = 0; i < parseInt(password_criteria_input.howlong); i++) {
    var password_character = getRandom(characters_selected, characters_selected.length);
    password_characters.push(password_character);
  }

  // Removes the commas enabling the user to copy and paste the generated password.
  var password_characters_no_commas = password_characters.join('');
  return (password_characters_no_commas);

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