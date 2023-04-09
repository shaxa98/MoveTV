const registerSubmitBtn = document.getElementById('register-submit');
const registerForm = document.getElementById('regisration-form');
const registerSuccessBanner = document.getElementById(
  'regisration-success-bunner'
);
const users = [];

// const user = {
//   username: '',
//   email: '',
//   password: '',
// };

const username = document.getElementById('username');
const password = document.getElementById('password');

function register(username,password){
  username = user 
    password = pas
   return('You are successfully registrated',username);
   }
function login(user,pas){
  if(user===username && pas===pasword ) { 
  return('You are welcome',username);
    } 
  else {
    return('Wrong creadentials ')
  }
}


registerSubmitBtn.onclick = () => {
  registerForm.classList.add('d-none');
  registerSuccessBanner.classList.remove('d-none');
};
