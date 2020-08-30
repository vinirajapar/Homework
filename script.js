// Action when user click on the "Generate Button":
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", acceptCriteria);
// Golabl variables: Created "letters, numbers, symbols array to provide the application to generate password".
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["&", "^", "%", "$", "#", "@", "~"];
// Function for acceptCriteria: this function will request the user follow the criteria to able to generate the password.
function acceptCriteria() {
    var isValid = confirm("Your password must meet the following criteria?\n" +
        "1. Contains Uppercase and lowercase letters \n" +
        "2. Contains Special characters and numbers");
    if (isValid == false) {
        alert("System will not generate valid password.");
        return;
    }
    var numberOfLength = prompt("Please enter the length of the password.");
    var upperCaseLetter = confirm("Please select uppercase letters.");
    var lowerCaseLetter = confirm("Please select lowercase letters.");
    var specialCharacter = confirm("Please select special characters.");
    var numbers = confirm("Please select numbers.");
    if (numberOfLength < 8 || numberOfLength > 128 || upperCaseLetter == false || specialCharacter ==false || numbers == false) {
        alert("Please reset your password");
        return;
    }
    writePassword(numberOfLength);
}
// Function for system generate the password with the acceptCriteria:
function generatePassword(passwordLength, uppercase, lowercase, specialcase, numbercase) {
    var temp = passwordLength;
    var userPassword = "";
    while (temp > 0) {
        userPassword = userPassword + letters[Math.floor(Math.random() * letters.length)];
        temp--;
        if (!temp > 0) break;
        userPassword = userPassword + letters[Math.floor(Math.random() * letters.length)].toLowerCase();
        temp--;
        if (!temp > 0) break;
        userPassword = userPassword + numbers[Math.floor(Math.random() * numbers.length)];
        temp--;
        if (!temp > 0) break;
        userPassword = userPassword + symbols[Math.floor(Math.random() * symbols.length)];
        temp--;
        if (!temp > 0) break;
    }
    return userPassword;
}
//Write password to the #password input
function writePassword(number) {
    var password = generatePassword(number);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}