const signUpName = document.getElementById("signUpName");
const signUpPassword = document.getElementById("signUpPassword");
const signUpEmail = document.getElementById("signUpEmail");


const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");

// function Add user and set to localStorage
function addUser() {
  let userData = {
    userName: signUpName.value,
    userPass: signUpPassword.value,
    userEmail: signUpEmail.value,
  };
  
  localStorage.setItem("userData", JSON.stringify(usersContainer));
  return userData;
}

// uncommitted yet
function userLogin() {
  for (let i = 0; i < usersContainer.length; i++) {
    const user = usersContainer[i];
  }

  // let user = {
  //   userEmail: signInEmail.value,
  //   userPass: signInPassword.value,
  // };

  // if (
  //   signInEmail.value == JSON.parse(localStorage.getItem("userData")) ||
  //   signInPassword.value == JSON.parse(localStorage.getItem("userData"))
  // ) {
  //   window.location = "welcome.html";
  // } else {
  //   console.log("user is invalid");
  // }
}

// if(userName.value == storedName && userPw.value == storedPw) {
//   alert('You are logged in.');
// }else {
//   alert('ERROR.');
// }
