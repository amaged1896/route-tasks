const signUpName = document.getElementById("signUpName");
const signUpEmail = document.getElementById("signUpEmail");
const signUpPassword = document.getElementById("signUpPassword");

const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");

// function Add user and set to localStorage
let userContainer = [];
function addUser() {
  let userData = {
    userName: signUpName.value,
    userPass: signUpPassword.value,
    userEmail: signUpEmail.value,
  };
  userContainer.push(userData);
  localStorage.setItem("userData", JSON.stringify(userContainer));
}

// user Login
function userLogin() {
  let users = JSON.parse(localStorage.getItem("userData"));
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].userPass == signInPassword.value &&
      users[i].userEmail == signInEmail.value
    ) {
      window.location.pathname = "/welcome.html";
    } else {
      console.log("Invalid Data");
    }
  }
}
