const firstName = document.getElementById("inputOne");
const firstNameRequired = document.getElementById("firstNameEmpty");
const firstNameMoreThan3 = document.getElementById("firstNameMoreThan3");

const submitButton = document.getElementById("button");
const lastName = document.getElementById("inputTwo");
const lastNameRequired = document.getElementById("lastNameEmpty");
const lastNameMoreThan3 = document.getElementById("lastNameMoreThan3");

const email = document.getElementById("inputThree");
const emailRequired = document.getElementById("emailEmpty");
const emailMoreThan3 = document.getElementById("emailMoreThan3");

const web = document.getElementById("inputFour");
const webRequired = document.getElementById("webEmpty");
const webMoreThan3 = document.getElementById("webMoreThan3");

const message = document.getElementById("inputFive");
const messageRequired = document.getElementById("messageEmpty");
const messageMoreThan3 = document.getElementById("messageMoreThan3");

function validateMessage(value) {
  if (value.length === 0) {
    messageRequired.style.display = "flex";
    messageMoreThan3.style.display = "none";
  } else if (value.length <= 3) {
    messageRequired.style.display = "none";
    messageMoreThan3.style.display = "flex";
  } else {
    messageRequired.style.display = "none";
    messageMoreThan3.style.display = "none";
  }
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

  function validateMessage(value) {
    if (value.length === 0) {
      messageRequired.style.display = "flex";
      messageMoreThan3.style.display = "none";
      submitButton.setAttribute("disabled", "true");
    } else if (value.length <= 3) {
      messageRequired.style.display = "none";
      messageMoreThan3.style.display = "flex";
      submitButton.setAttribute("disabled", "true");
    } else {
      messageRequired.style.display = "none";
      messagelMoreThan3.style.display = "none";
      submitButton.removeAttribute("disabled");
    }
  }
}
function validateWeb(value) {
  if (value.length === 0) {
    webRequired.style.display = "flex";
    webMoreThan3.style.display = "none";
    submitButton.setAttribute("disabled", "true");
  } else if (value.length <= 3) {
    webRequired.style.display = "none";
    webMoreThan3.style.display = "flex";
    submitButton.setAttribute("disabled", "true");
  } else {
    webRequired.style.display = "none";
    webMoreThan3.style.display = "none";
    submitButton.removeAttribute("disabled");
  }
}

function validateEmail(value) {
  if (value.length === 0) {
    emailRequired.style.display = "flex";
    emailMoreThan3.style.display = "none";
    submitButton.setAttribute("disabled", "true");
  } else if (value.length <= 3) {
    emailRequired.style.display = "none";
    emailMoreThan3.style.display = "flex";
    submitButton.setAttribute("disabled", "true");
  } else {
    emailRequired.style.display = "none";
    emailMoreThan3.style.display = "none";
    submitButton.removeAttribute("disabled");
  }
}

function validateLastName(value) {
  if (value.length === 0) {
    lastNameRequired.style.display = "flex";
    lastNameMoreThan3.style.display = "none";
    submitButton.setAttribute("disabled", "true");
  } else if (value.length <= 3) {
    lastNameRequired.style.display = "none";
    lastNameMoreThan3.style.display = "flex";
    submitButton.setAttribute("disabled", "true");
  } else {
    lastNameRequired.style.display = "none";
    lastNameMoreThan3.style.display = "none";
    submitButton.removeAttribute("disabled");
  }
}

function validateFirstName(value) {
  if (value.length === 0) {
    firstNameRequired.style.display = "flex";
    firstNameMoreThan3.style.display = "none";
    submitButton.setAttribute("disabled", "true");
  } else if (value.length <= 3) {
    firstNameRequired.style.display = "none";
    firstNameMoreThan3.style.display = "flex";
    submitButton.setAttribute("disabled", "true");
  } else {
    firstNameRequired.style.display = "none";
    firstNameMoreThan3.style.display = "none";
    submitButton.removeAttribute("disabled");
  }
}

firstName.onkeyup = function () {
  validateFirstName(firstName.value);
};
lastName.onkeyup = function () {
  validateLastName(lastName.value);
};
email.onkeyup = function () {
  validateEmail(email.value);
};
web.onkeyup = function () {
  validateWeb(web.value);
}
message.onkeyup = function () {
  validateMessage(message.value);
}

submitButton.addEventListener("click", function () {
  validateFirstName(firstName.value);

  validateLastName(lastName.value);

  validateEmail(email.value);

  validateWeb(web.value);

  validateMessage(message.value);
});
