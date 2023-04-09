const registerSubmitBtn = document.getElementById('register-submit');
const registerForm = document.getElementById('regisration-form');
const registerSuccessBanner = document.getElementById(
  'regisration-success-bunner'
);
const loginForm = document.getElementById('login-form');
const clickToLoginBtn = document.getElementById('clickToLoginBtn');

const users = [];

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

registerSubmitBtn.onclick = () => {
  const user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  users.push(user);
  registerForm.classList.add('d-none');
  registerSuccessBanner.classList.remove('d-none');
  console.log('users: ', users);
};

clickToLoginBtn.onclick = () => {
  registerSuccessBanner.classList.add('d-none');
  loginForm.classList.remove('d-none');
};
