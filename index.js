const firstName = document.getElementById("firstName");
const firstNameError = document.getElementById("firstNameError");

const emailAdress = document.getElementById("emailAdress");
const emailError = document.getElementById("emailError");

const lastName = document.getElementById("lastName");
const lastNameError = document.getElementById("lastNameError");

const websiteName = document.getElementById("websiteName");
const websiteError = document.getElementById("websiteError");

const messageArea = document.getElementById("messageArea");
const messageError = document.getElementById("messageError");

const requiredFields = document.getElementsByClassName("requiredFields");

submitButton.addEventListener("click", function () {
  if (firstName.value === "") {
    firstNameError.style.display = "flex";
  } else console.log(firstName.value);
});
submitButton.addEventListener("click", function () {
  if (emailAdress.value === "") {
    emailError.style.display = "flex";
  } else console.log(emailAdress.value);
});
submitButton.addEventListener("click", function () {
  if (lastName.value === "") {
    lastNameError.style.display = "flex";
  } else console.log(lastName.value);
});
submitButton.addEventListener("click", function () {
  if (websiteName.value === "") {
    websiteError.style.display = "flex";
  } else console.log(websiteName.value);
});
submitButton.addEventListener("click", function () {
  if (messageArea.value === "") {
    messageError.style.display = "flex";
  } else console.log(messageArea.value);
});
