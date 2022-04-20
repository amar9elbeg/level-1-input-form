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

let firstNameErrors = true;
let lastNameErrors = true;
let emailErrors = true;
let websiteErrors = true;
let passwordErrors = true;
let passwordErrorsConfirm = true;
let messageErrors = true;

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
    firstNameErrors = false;
    console.log(value)
  }
}

function checkLastName(value) {
  if (value === "") {
    lastNameError.style.display = "flex";
    lastNameErrorTwo.style.display = "none";
    submitButton.setAttribute("disabled", "true");
  } else if (value.length <= 3) {
    lastNameErrorTwo.style.display = "flex";
    lastNameError.style.display = "none";
    console.log("Insufficient Character Amount");
    submitButton.setAttribute("disabled", "true");
  } else {
    lastNameErrorTwo.style.display = "none";
    lastNameError.style.display = "none";
    console.log(value);
    submitButton.removeAttribute("disabled");
    lastNameErrors = false;
  }
}
function checkEmail(value) {
  if (value === "") {
    emailError.style.display = "flex";
    emailErrorTwo.style.display = "none";
    submitButton.setAttribute("disabled", "true");
  } else if (value.length <= 3) {
    emailErrorTwo.style.display = "flex";
    emailError.style.display = "none";
    console.log("Insufficient Character Amount");
    submitButton.setAttribute("disabled", "true");
  } else {
    emailErrorTwo.style.display = "none";
    emailError.style.display = "none";
    console.log(value);
    submitButton.removeAttribute("disabled");
    emailErrors = false;
  }
}
function checkWebsite(value) {
  if (value === "") {
    websiteError.style.display = "flex";
    websiteErrorTwo.style.display = "none";
    submitButton.setAttribute("disabled", "true");
  } else if (value.length <= 3) {
    websiteErrorTwo.style.display = "flex";
    websiteError.style.display = "none";
    console.log("Insufficient Character Amount");
    submitButton.setAttribute("disabled", "true");
  } else {
    websiteErrorTwo.style.display = "none";
    websiteError.style.display = "none";
    console.log(value);
    submitButton.removeAttribute("disabled");
    websiteErrors = false;
  }
}
function checkPassword(valueOfPassword, valueOfConfirmPassword) {
  if (valueOfPassword === "") {
    passwordError.style.display = "flex";
    passwordErrorTwo.style.display = "none";
    passwordErrorConfirm.style.display = "none";
    passwordErrorConfirmTwo.style.display = "none";
    submitButton.setAttribute("disabled", "true");
  } else if (valueOfPassword.length <= 7) {
    passwordErrorTwo.style.display = "flex";
    passwordError.style.display = "none";
    passwordErrorConfirm.style.display = "none";
    passwordErrorConfirmTwo.style.display = "none";
    console.log("Insufficient Character Amount");
    submitButton.setAttribute("disabled", "true");
  } else if (valueOfConfirmPassword === "") {
    passwordErrorConfirm.style.display = "flex";
    passwordError.style.display = "none";
    passwordErrorTwo.style.display = "none";
    passwordErrorConfirmTwo.style.display = "none";
    submitButton.setAttribute("disabled", "true");
    passwordErrors = false;
    passwordErrorsConfirm = false;
  } else if (valueOfConfirmPassword !== valueOfPassword) {
    passwordErrorConfirmTwo.style.display = "flex";
    passwordErrorConfirm.style.display = "none";
    passwordError.style.display = "none";
    passwordErrorTwo.style.display = "none";
    submitButton.setAttribute("disabled", "true");
  } else {
    passwordErrorConfirm.style.display = "none";
    passwordErrorConfirmTwo.style.display = "none";
    console.log(valueOfPassword);
    console.log(valueOfConfirmPassword);
    submitButton.removeAttribute("disabled");
    passwordErrors = false;
    passwordErrorsConfirm = false;
  }
}
function checkMessage(value) {
  if (messageArea.value === "") {
    messageError.style.display = "flex";
    submitButton.disabled = "true";
    submitButton.setAttribute("disabled", "true");
  } else {
    messageError.style.display = "none";
    console.log(value);
    submitButton.removeAttribute("disabled");
    messageErrors = false;
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
  checkPassword(passwordName.value, passwordNameConfirm.value);
  console.log("clickedButton")
  if (!firstNameErrors && !lastNameErrors && !emailErrors && !websiteErrors && !messageErrors && !passwordErrors && !passwordErrorsConfirm === true) {
    navigateToSignIn.setAttribute("href", "./sign-in.html");
  } else {
    console.log("Error")
  }
});
