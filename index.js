const required1 = document.getElementById("required1");
const required2 = document.getElementById("required2");
const required3 = document.getElementById("required3");
const required4 = document.getElementById("required4");
const required5 = document.getElementById("required5");
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
function validateInput1(value) {
  if (value === "") {
    required1.style.display = "flex";
  } else if (value.length <= 3) {
    validated1.style.display = "flex";
    required1.style.display = "none";
  } else {
    validated1.style.display = "none";
    required1.style.display = "none";
  }
}

button.addEventListener("click", function () {
  validateInput1(firstName.value);
});
function validateInput2(value) {
  if (value === "") {
    required2.style.display = "flex";
  } else if (value.length <= 3) {
    validated2.style.display = "flex";
    required2.style.display = "none";
  } else {
    validated2.style.display = "none";
    required2.style.display = "none";
  }
}

button.addEventListener("click", function () {
  validateInput2(lastName.value);
});
function validateInput3(value) {
  if (value === "") {
    required3.style.display = "flex";
  } else if (value.length <= 3) {
    validated3.style.display = "flex";
    required3.style.display = "none";
  } else {
    validated3.style.display = "none";
    required3.style.display = "none";
  }
}

button.addEventListener("click", function () {
  validateInput3(email.value);
});
function validateInput4(value) {
  if (value === "") {
    required4.style.display = "flex";
  } else if (value.length <= 3) {
    validated4.style.display = "flex";
    required4.style.display = "none";
  } else {
    validated4.style.display = "none";
    required4.style.display = "none";
  }
}

button.addEventListener("click", function () {
  validateInput4(websiteName.value);
});
function validateInput5(value) {
  if (value === "") {
    required5.style.display = "flex";
  } else if (value.length <= 3) {
    validated5.style.display = "flex";
    required5.style.display = "none";
  } else {
    validated5.style.display = "none";
    required5.style.display = "none";
  }
}

button.addEventListener("click", function () {
  validateInput5(message.value);
});
