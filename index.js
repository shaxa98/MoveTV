const registerSubmitBtn = document.getElementById('register-submit');
const registerForm = document.getElementById('regisration-form');
const registerSuccessBanner = document.getElementById(
  'regisration-success-bunner'
);
const loginForm = document.getElementById('login-form');
const clickToLoginBtn = document.getElementById('clickToLoginBtn');

const users = [{
  username: 'shaxa',
  email: 'shaxa@mail.com',
  password: '12345678',
}, {
  username: 'shaxa98',
  email: 'shaxa@ooo.oo',
  password: '4321'
}];

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const clicToLogin = document.getElementById('login-submit');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginSucsesBaner = document.getElementById("login-success-bunner");
const loginUnsucsesBaner =document.getElementById("login-unsuccess-bunner");


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

clicToLogin.onclick = () => {
  console.log(loginEmail.value , loginPassword.value);
  let found = false;

  for (let i = 0; i < users.length; i++ ) {
    let user = users[i];

    const sameEmail =  user.email===loginEmail.value;
    const samePasword = user.password===loginPassword.value;
    const bothSame = sameEmail && samePasword;
    loginForm.classList.add('d-none');

    if (bothSame) {
      found == true;
      console.log('You are welcome',loginEmail.value);
      
      loginSucsesBaner.classList.remove('d-none');
      break;
        } 
        else {
          console.log('Wrong creadentials ');
        loginUnsucsesBaner.classList.remove('d-none');

        }

    

    
    
   
  
    }


}