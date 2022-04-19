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

submitButton.addEventListener("click", function () {
  validateFirstName(firstName.value);
  validateLastName(lastName.value);
});
