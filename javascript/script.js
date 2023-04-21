// Get the generate button element
var generateBtn = document.getElementById("generate");
// Get the copy button element
var copyBtn = document.getElementById("clipboard");



// Add event listener to the generate button
generateBtn.addEventListener("click", function () {
  // Get the password length from the user input
  var passwordLength = prompt(
    "Enter the length of the password (between 8 and 128)"
  );
  // Parse the password length to an integer
  var length = parseInt(passwordLength);

  // Check if the length is valid
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  // Get the character set options from the user input
  var useUpperCase = confirm("Do you want to include uppercase letters?");
  var useLowerCase = confirm("Do you want to include lowercase letters?");
  var useSpecialChars = confirm("Do you want to include special characters?");

  // Generate the password
  var password = generatePassword(
    length,
    useUpperCase,
    useLowerCase,
    useSpecialChars
  );

  // Update the password textarea with the generated password
  var passwordTextarea = document.getElementById("password");
  passwordTextarea.value = password;
});

// Generate a random password with the given length and character set options
function generatePassword(length, useUpperCase, useLowerCase, useSpecialChars) {
  // Define the character sets for the password
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  // Initialize the character set for the password
  let charSet = "";

  // Add the selected character sets to the password character set
  if (useUpperCase) {
    charSet += upperCaseChars;
  }
  if (useLowerCase) {
    charSet += lowerCaseChars;
  }
  if (useSpecialChars) {
    charSet += specialChars;
  }
  charSet += numberChars;

  // Generate the password
  let password = "";
  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}


// Add event listener to the copy button
copyBtn.addEventListener("click", function () {
  // Call the copyContent function
  copyContent();
});

const copyContent = async () => {
  // Get the password textarea element
  const passwordTextarea = document.getElementById("password");

  // Get the password from the textarea
  const text = passwordTextarea.value;

  try {
    await navigator.clipboard.writeText(text);

    // Log the message when the password is copied to clipboard
    console.log("Password copied to clipboard!");

    // Update the alert message to show that the password was copied
    alert("Password copied to clipboard!");

  } catch (err) {
    // Log the message when the password is not copied to clipboard
    console.error("Failed to copy password to clipboard!");

    // Update the alert message to show that the password was not copied
    alert("Failed to copy password to clipboard!");
  }
};
