const firstName = document.getElementById("firstName");
const firstNameError = document.getElementById("firstNameError");

const emailAdress = document.getElementById("emailAdress");
const emailError = document.getElementById("emailError");

const lastName = document.getElementById("lastName");
const lastNameError = document.getElementById("lastNameError");

const websiteName = document.getElementById("websiteName");
const websiteError = document.getElementById("websiteError");

const passwordName = document.getElementById("passwordName");
const passwordError = document.getElementById("passwordError");

const passwordNameConfirm = document.getElementById("passwordNameConfirm");
const passwordErrorConfirm = document.getElementById("passwordErrorConfirm");

const messageArea = document.getElementById("messageArea");
const messageError = document.getElementById("messageError");

const navigateToSignIn = document.getElementById("navigateToSignIn");

// second part

const firstNameErrorTwo = document.getElementById("firstNameErrorTwo");
const emailErrorTwo = document.getElementById("emailErrorTwo");
const lastNameErrorTwo = document.getElementById("lastNameErrorTwo");
const websiteErrorTwo = document.getElementById("websiteErrorTwo");
const passwordErrorTwo = document.getElementById("passwordErrorTwo");
const passwordErrorConfirmTwo = document.getElementById(
  "passwordErrorConfirmTwo"
);

const requiredAmount = document.getElementById("requiredAmount");

const requiredFields = document.getElementsByClassName("requiredFields");

const submitButton = document.getElementById("submitButton");

let firstNameError = true;
let lastNameError = true;
let emailError = true;
let firstNameError = true;
let firstNameError = true;

function checkFirstName(value) {
  if (value === "") {
    firstNameError.style.display = "flex";
    firstNameErrorTwo.style.display = "none";
    submitButton.setAttribute("disabled", "true");
  } else if (value.length <= 3) {
    firstNameErrorTwo.style.display = "flex";
    firstNameError.style.display = "none";
    submitButton.setAttribute("disabled", "true");
    console.log("Insufficient Character Amount");
  } else {
    firstNameErrorTwo.style.display = "none";
    firstNameError.style.display = "none";
    submitButton.removeAttribute("disabled");
    firstNameError = false;
  }
}

function checkLastName(value) {
  if (value === "") {
    lastNameError.style.display = "flex";
    lastNameErrorTwo.style.display = "none";
  } else if (value.length <= 3) {
    lastNameErrorTwo.style.display = "flex";
    lastNameError.style.display = "none";
    console.log("Insufficient Character Amount");
  } else {
    lastNameErrorTwo.style.display = "none";
    lastNameError.style.display = "none";
    console.log(value);
  }
}
function checkEmail(value) {
  if (value === "") {
    emailError.style.display = "flex";
    emailErrorTwo.style.display = "none";
  } else if (value.length <= 3) {
    emailErrorTwo.style.display = "flex";
    emailError.style.display = "none";
    console.log("Insufficient Character Amount");
  } else {
    emailErrorTwo.style.display = "none";
    emailError.style.display = "none";
    console.log(value);
  }
}
function checkWebsite(value) {
  if (value === "") {
    websiteError.style.display = "flex";
    websiteErrorTwo.style.display = "none";
  } else if (value.length <= 3) {
    websiteErrorTwo.style.display = "flex";
    websiteError.style.display = "none";
    console.log("Insufficient Character Amount");
  } else {
    websiteErrorTwo.style.display = "none";
    websiteError.style.display = "none";
    console.log(value);
  }
}
function checkPassword(valueOfPassword, valueOfConfirmPassword) {
  if (valueOfPassword === "") {
    passwordError.style.display = "flex";
    passwordErrorTwo.style.display = "none";
    passwordErrorConfirm.style.display = "none";
    passwordErrorConfirmTwo.style.display = "none";
  } else if (valueOfPassword.length <= 7) {
    passwordErrorTwo.style.display = "flex";
    passwordError.style.display = "none";
    passwordErrorConfirm.style.display = "none";
    passwordErrorConfirmTwo.style.display = "none";
    console.log("Insufficient Character Amount");
  } else if (valueOfConfirmPassword === "") {
    passwordErrorConfirm.style.display = "flex";
    passwordError.style.display = "none";
    passwordErrorTwo.style.display = "none";
    passwordErrorConfirmTwo.style.display = "none";
  } else if (valueOfConfirmPassword !== valueOfPassword) {
    passwordErrorConfirmTwo.style.display = "flex";
    passwordErrorConfirm.style.display = "none";
    passwordError.style.display = "none";
    passwordErrorTwo.style.display = "none";
  } else {
    passwordErrorConfirm.style.display = "none";
    passwordErrorConfirmTwo.style.display = "none";
    console.log(value);
  }
}
function checkMessage(value) {
  if (messageArea.value === "") {
    messageError.style.display = "flex";
    submitButton.disabled = "true";
  } else {
    messageError.style.display = "none";
    console.log(value);
  }
}

firstName.onkeyup = function () {
  checkFirstName(firstName.value);
};
lastName.onkeyup = function () {
  checkLastName(lastName.value);
};
emailAdress.onkeyup = function () {
  checkEmail(emailAdress.value);
};
websiteName.onkeyup = function () {
  checkWebsite(websiteName.value);
};
passwordName.onkeyup = function () {
  checkPassword(passwordName.value, passwordNameConfirm.value);
};
passwordNameConfirm.onkeyup = function () {
  checkPassword(passwordName.value, passwordNameConfirm.value);
};
messageArea.onkeyup = function () {
  checkMessage(messageArea.value);
};

submitButton.addEventListener("click", function () {
  checkFirstName(firstName.value);
  checkLastName(lastName.value);
  checkWebsite(websiteName.value);
  checkEmail(emailAdress.value);
  checkMessage(messageArea.value);
  checkPassword(passwordName.value);
  if (!firstNameError && !lastNameError && !emailError && !messageError && !websiteError && !passwordError) {
    navigateToSignIn.setAttribute("href", "./sign-in.html");
  }
});
