export const loginName = document.getElementById("loginName");

export const loginPassword = document.getElementById("loginPassword");

export const loginErrors = document.getElementsByClassName("sign-in-errors");

export const loginError = document.getElementById("loginError");

export const loginErrorTwo = document.getElementById("loginErrorTwo");

export const loginButton = document.getElementById("loginButton");

export function checkLogin(usernameValue, passwordValue) {
  if (
    usernameValue === "" ||
    passwordValue === "" ||
    (usernameValue && passwordValue === "")
  ) {
    loginError.style.display = "flex";
    loginErrorTwo.style.display = "none";
  } else if (
    usernameValue !== firstName.value ||
    passwordValue !== passwordName.value ||
    (usernameValue !== firstName.value && passwordValue !== passwordName.value)
  ) {
    loginErrorTwo.style.display = "flex";
    loginError.style.display = "none";
  }
}
loginButton.addEventListener("click", function () {
    checkLogin(loginName.value, loginPassword.value);
  console.log("clicked");
});

// import { firstName, passwordName } from './sign-up.js';

// console.log(firstName)


