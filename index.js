const requireFirstName = document.getElementById("required1");
const requireLastName = document.getElementById("required2");
const requireEmail = document.getElementById("required3");
const requiredWebsiteName = document.getElementById("required4");
const requireMessage = document.getElementById("required5");
const validated1 = document.getElementById("validated1");
const validated2 = document.getElementById("validated2");
const validated3 = document.getElementById("validated3");
const validated4 = document.getElementById("validated4");
const validated5 = document.getElementById("validated5");
const button = document.getElementById("submit");
const websiteName = document.getElementById("websiteName");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
function validateFirstName(value) {
  if (value === "") {
    requireFirstName.style.display = "flex";
  } else if (value.length <= 3) {
    validated1.style.display = "flex";
    requireFirstName.style.display = "none";
  } else {
    validated1.style.display = "none";
    requireFirstName.style.display = "none";
  }
}

function validateLastName(value) {
  if (value === "") {
    requireLastName.style.display = "flex";
  } else if (value.length <= 3) {
    validated2.style.display = "flex";
    requireLastName.style.display = "none";
  } else {
    validated2.style.display = "none";
    requireLastName.style.display = "none";
  }
}

function validateEmail(value) {
  if (value === "") {
    requireEmail.style.display = "flex";
  } else if (value.length <= 3) {
    validated3.style.display = "flex";
    requireEmail.style.display = "none";
  } else {
    validated3.style.display = "none";
    requireEmail.style.display = "none";
  }
}

function validateWebsiteName(value) {
  if (value === "") {
    requiredWebsiteName.style.display = "flex";
  } else if (value.length <= 3) {
    validated4.style.display = "flex";
    requiredWebsiteName.style.display = "none";
  } else {
    validated4.style.display = "none";
    requiredWebsiteName.style.display = "none";
  }
}

function validateMessage(value) {
  if (value === "") {
    requireMessage.style.display = "flex";
  } else if (value.length <= 3) {
    validated5.style.display = "flex";
    requireMessage.style.display = "none";
  } else {
    validated5.style.display = "none";
    requireMessage.style.display = "none";
  }
}

button.addEventListener("click", function () {
  validateFirstName(firstName.value);
  validateLastName(lastName.value);
  validateEmail(email.value);
  validateWebsiteName(websiteName.value);
  validateMessage(message.value);
});
