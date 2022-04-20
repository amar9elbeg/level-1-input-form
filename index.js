const firstName = document.getElementById("inputOne");
const firstNameRequired = document.getElementById("firstNameEmpty");
const firstNameMoreThan3 = document.getElementById("firstNameMoreThan3");

const submitButton = document.getElementById("button");
const lastName = document.getElementById("inputTwo");
const lastNameRequired = document.getElementById("lastNameEmpty")
const lastNameMoreThan3 = document.getElementById("lastNameMoreThan3");

const Email = document.getElementById("Email")
const emailRequired = documen.getElementById("emailEmpty")
const emailMoreThan3 = document.getAnimations("emailMoreThan3")


const web = document.getElementById("web")
const webRequired = document.getElementById("webEmpty")
const webMoreThan3 = document.getElementById("webMoreThan3")

const message = document.getElementById("message")
const messageRequired = document.getElementById("messageEmpty")
const messageMoreThan3 = document.getElementById("messageMoreThan3")

function validateMessage(value) {
  if (value.length === 0) {
    messageRequired.style.display = "flex";
  } else if (value.length <= 3) {
    messageRequired.style.display = "none";
    messageMoreThan3.style.display = "flex";
  } else {
    messageRequired.style.display = "none";
    messageMoreThan3.style.display = "none";
  }

function validateWeb(value) {
  if (value.length === 0) {
    webRequired.style.display = "flex";
  } else if (value.length <= 3) {
    webRequired.style.display = "none";
    webMoreThan3.style.display = "flex";
  } else {
    webRequired.style.display = "none";
    webMoreThan3.style.display = "none";
  }
function validateEmail(value) {
  if (value.length === 0) {
    emailRequired.style.display = "flex";
  } else if (value.length <= 3) {
    emailRequired.style.display = "none";
    emailMoreThan3.style.display = "flex";
  } else {
    emailRequired.style.display = "none";
    emailMoreThan3.style.display = "none";
  }
}

function validateLastName(value) {
    if (value.length === 0) {
      lastNameRequired.style.display = "flex";
    } else if (value.length <= 3) {
      lastNameRequired.style.display = "none";
      lastNameMoreThan3.style.display = "flex";
    } else {
      lastNameRequired.style.display = "none";
      lastNameMoreThan3.style.display = "none";
    }
  }

function validateFirstName(value) {
  if (value.length === 0) {
    firstNameRequired.style.display = "flex";
  } else if (value.length <= 3) {
    firstNameRequired.style.display = "none";
    firstNameMoreThan3.style.display = "flex";
  } else {
    firstNameRequired.style.display = "none";
    firstNameMoreThan3.style.display = "none";
  }
}

submitButton.addEventListener("click"), function () {
  validateFirstName(firstName.value);
  validateLastName(lastName.value);
  validateEmail(Email.value);
  validateWeb(web.value);
  validateMessage(message.value);``
})
