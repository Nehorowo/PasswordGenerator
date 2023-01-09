const passwordElement = document.getElementById("password");
const passwordLengthElement = document.getElementById("passLength");
const copyText = document.getElementById("password");
const passwordUppercaseElement = document.getElementById("passUppercase");
const passwordLowercaseElement = document.getElementById("passLowercase");
const passwordSpecialCharsElement = document.getElementById("passSpecialChars");
const passwordNoNumbersElement = document.getElementById("passNoNumbers");

const chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = 8;
let isUppercase = false;
let isLowercase = false;
let isNoSpecialChars = false;
let isNoNumbers = false;

const passwordArray = [];

document.addEventListener("DOMContentLoaded", () => {
  // let onLoadNumbers = includeNumbers.checked;
  // let onLoadSymbols = includeSymbols.checked;
  passwordLengthElement.value = length;
  generatePassword();
});

function generatePassword() {
  let password = "";

  for (let i = 0; i <= length; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);

    if (isUppercase) {
      password += chars.substring(randomNumber, randomNumber + 1).toUpperCase();
    } else if (isLowercase) {
      password += chars.substring(randomNumber, randomNumber + 1).toLowerCase();
    } else {
      password += chars.substring(randomNumber, randomNumber + 1);
    }
  }

  if (isNoSpecialChars) {
    password = password.replace(/[^a-zA-Z0-9]/g, "");
  }

  if (isNoNumbers) {
    password = password.replace(/[^a-zA-Z!@#$%^&*()]/g, "");
  }

  passwordElement.value = password;
}

function copyPassword() {
  copyText.select();
  document.execCommand("copy");
}

passwordLengthElement.addEventListener("change", (event) => {
  length = event.target.value;
});

passwordLengthElement.addEventListener("input", (event) => {
  if (event.target.value.length > 2) {
    passwordLengthElement.value = event.target.value.slice(0, 2);
  }

  if (event.target.value > 16) {
    passwordLengthElement.value = 16;
  }

  generatePassword();
});

passwordUppercaseElement.addEventListener("change", (event) => {
  isUppercase = event.target.checked;
  if (isUppercase) {
    passwordLowercaseElement.setAttribute("disabled", true);
  } else {
    passwordLowercaseElement.removeAttribute("disabled");
  }
});

passwordLowercaseElement.addEventListener("change", (event) => {
  isLowercase = event.target.checked;
  if (isLowercase) {
    passwordUppercaseElement.setAttribute("disabled", true);
  } else {
    passwordUppercaseElement.removeAttribute("disabled");
  }
});

passwordSpecialCharsElement.addEventListener("change", (event) => {
  isNoSpecialChars = event.target.checked;
});

passwordNoNumbersElement.addEventListener("change", (event) => {
  isNoNumbers = event.target.checked;
  console.log("isNoNumbers:", isNoNumbers);
});
