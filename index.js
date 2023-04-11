const registerSubmitBtn = document.getElementById("register-submit");
const registerForm = document.getElementById("regisration-form");
const registerSuccessBanner = document.getElementById(
  "regisration-success-bunner"
);
const loginForm = document.getElementById("login-form");
const clickToLoginBtn = document.getElementById("clickToLoginBtn");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const clicToLogin = document.getElementById("login-submit");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginSucsesBaner = document.getElementById("login-success-bunner");
const loginUnsucsesBaner = document.getElementById("login-unsuccess-bunner");
const mainBanner = document.getElementById("main");
const navbarLogin = document.getElementById("nav-login active");
const navbarLogo = document.getElementById("navbar-brand");
const navbarRegister = document.getElementById("nav-reg active");
navbarLogo.onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  clickToLoginBtn.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  registerForm.classList.add("d-none");
  mainBanner.classList.remove("d-none");
};
navbarLogin.onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  clickToLoginBtn.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  registerForm.classList.add("d-none");
  mainBanner.classList.add("d-none");
  loginForm.classList.remove("d-none");
};
navbarRegister.onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  clickToLoginBtn.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  mainBanner.classList.add("d-none");
  registerForm.classList.remove("d-none");
};

const users = [
  {
    username: "shaxa",
    email: "shaxa@mail.com",
    password: "12345678",
  },
  {
    username: "shaxa98",
    email: "shaxa@ooo.oo",
    password: "4321",
  },
];

registerSubmitBtn.onclick = () => {
  const user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  users.push(user);
  registerForm.classList.add("d-none");
  registerSuccessBanner.classList.remove("d-none");
  console.log("users: ", users);
};

clickToLoginBtn.onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.remove("d-none");
};

clicToLogin.onclick = () => {
  loginForm.classList.add("d-none");
  // let userHast = false;

  // User hast nabudagesha meyobad
  // for (let i = 0; i < users.length; i++) {
  //   let user = users[i];
  //   if (user.email === loginEmail.value && user.password === loginPassword.value) {
  //     userHast = true;
  //     break;
  //   }
  // }

  // forof in baroyi array
  // forin baroyi object
  // for (const user of users) {
  //   if (
  //     user.email === loginEmail.value &&
  //     user.password === loginPassword.value
  //   ) {
  //     userHast = true;
  //     break;
  //   }
  // }

  // users.forEach((user)=> {
  //   if (
  //     user.email === loginEmail.value &&
  //     user.password === loginPassword.value
  //   ) {
  //     userHast = true;
  //   }
  //       })

  const userHast = users.some(
    (user) =>
      user.email === loginEmail.value && user.password === loginPassword.value
  );

  if (userHast === true) {
    loginSucsesBaner.classList.remove("d-none");
  } else {
    loginUnsucsesBaner.classList.remove("d-none");
  }
};
