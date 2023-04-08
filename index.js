const registerSubmitBtn = document.getElementById('register-submit');
const registerForm = document.getElementById('regisration-form');
const registerSuccessBanner = document.getElementById(
  'regisration-success-bunner'
);
const users = [];

const user = {
  username: '',
  email: '',
  password: '',
};

registerSubmitBtn.onclick = () => {
  registerForm.classList.add('d-none');
  registerSuccessBanner.classList.remove('d-none');
};
