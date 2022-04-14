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

// second part

const firstNameErrorTwo = document.getElementById("firstNameErrorTwo");
const emailErrorTwo = document.getElementById("emailErrorTwo");
const lastNameErrorTwo = document.getElementById("lastNameErrorTwo");
const websiteErrorTwo = document.getElementById("websiteErrorTwo");
const passwordErrorTwo = document.getElementById("passwordErrorTwo");
const passwordErrorConfirmTwo = document.getElementById("passwordErrorConfirmTwo");



const requiredAmount = document.getElementById("requiredAmount");

const requiredFields = document.getElementsByClassName("requiredFields");


function checkFirstName(value) {
  if (value === "") {
    firstNameError.style.display = "flex";
    firstNameErrorTwo.style.display = "none"
  } else if (value.length <= 3) {
    firstNameErrorTwo.style.display = "flex";
    firstNameError.style.display = "none"
    console.log("Insufficient Character Amount");
  } else {
    firstNameErrorTwo.style.display = "none";
    firstNameError.style.display = "none"
    console.log(value);
  }
}

function checkLastName(value) {
  if (lastName.value === "") {
    lastNameError.style.display = "flex";
    lastNameErrorTwo.style.display = "none"
  } else if (lastName.value.length <= 3) {
    lastNameErrorTwo.style.display = "flex";
    lastNameError.style.display = "none"
    console.log("Insufficient Character Amount");
  } else {
    lastNameErrorTwo.style.display = "none";
    lastNameError.style.display = "none"
    console.log(value);
  }
}
function checkEmail(value) {
  if (emailAdress.value === "") {
    emailError.style.display = "flex";
    emailErrorTwo.style.display = "none"
  } else if (emailAdress.value.length <= 3) {
    emailErrorTwo.style.display = "flex"
    emailError.style.display = "none"
    console.log("Insufficient Character Amount");
  } else {
    emailErrorTwo.style.display = "none"
    emailError.style.display = "none"
    console.log(value);
  }
}
function checkWebsite(value) {
  if (websiteName.value === "") {
    websiteError.style.display = "flex";
    websiteErrorTwo.style.display = "none"
  } else if (websiteName.value.length <= 3) {
    websiteErrorTwo.style.display = "flex";
    websiteError.style.display = "none"
    console.log("Insufficient Character Amount");
  } else {
    websiteErrorTwo.style.display = "none";
    websiteError.style.display = "none"
    console.log(value);
  }
}
function checkPassword(value) {
  if (passwordName.value === "") {
    passwordError.style.display = "flex";
    passwordErrorTwo.style.display = "none"
    passwordErrorConfirm.style.display = "none"
    passwordErrorConfirmTwo.style.display = "none"
  } else if (passwordName.value.length <= 7) {
    passwordErrorTwo.style.display = "flex";
    passwordError.style.display = "none"
    passwordErrorConfirm.style.display = "none"
    passwordErrorConfirmTwo.style.display = "none"
    console.log("Insufficient Character Amount");
  } else if (passwordNameConfirm.value === "") {
    passwordErrorConfirm.style.display = "flex"
    passwordError.style.display = "none"
    passwordErrorTwo.style.display = "none"
    passwordErrorConfirmTwo.style.display = "none"
  } else if (passwordNameConfirm.value !== passwordName.value) {
    passwordErrorConfirmTwo.style.display = "flex"
    passwordErrorConfirm.style.display = "none"
    passwordError.style.display = "none"
    passwordErrorTwo.style.display = "none"
  } else {
    passwordErrorConfirm.style.display = "none"
    passwordErrorConfirmTwo.style.display = "none"
    console.log(value);
  }
}
function checkMessage(value) {
  if (messageArea.value === "") {
    messageError.style.display = "flex";
  } else {
    messageError.style.display = "none"
    console.log(value);
  }
}

submitButton.addEventListener("click", function () {
  checkFirstName(firstName.value);
  checkLastName(lastName.value);
  checkWebsite(websiteName.value);
  checkEmail(emailAdress.value)
  checkMessage(messageArea.value)
  checkPassword(passwordName.value)
});
