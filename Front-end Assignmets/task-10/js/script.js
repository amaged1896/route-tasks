let signUpName = document.getElementById("signUpName");
let signUpPassword = document.getElementById("signUpPassword");
let signUpEmail = document.getElementById("signUpEmail");
let usersContainer = [];

let signInEmail = document.getElementById("signInEmail");
let signInPassword = document.getElementById("signInPassword");

if (localStorage.getItem("user") != null) {
  usersContainer = JSON.parse(localStorage.getItem("user"));
}

// function Add user and set to localStorage

function addUser() {
  let userData = {
    userName: signUpName.value,
    userPass: signUpPassword.value,
    userEmail: signUpEmail.value,
  };
  usersContainer.push(userData);
  localStorage.setItem("userData", JSON.stringify(usersContainer));
  console.log(userData);
}
