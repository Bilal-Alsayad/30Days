const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~|}{[]<>/-=";

const allChars = upperCase + lowerCase + number + symbol;

function generatePassword() {
    let password = "";

    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password
}

function copyToClipboard() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value)
}