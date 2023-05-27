const get = (elId) => {
  return document.getElementById(elId);
};

const registerForm = document.getElementById('regisration-form');
const registerSuccessBanner = document.getElementById(
  'regisration-success-bunner'
);
const loginForm = document.getElementById('login-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginSucsesBaner = document.getElementById('login-success-bunner');
const loginUnsucsesBaner = document.getElementById('login-unsuccess-bunner');
const mainBanner = document.getElementById('main');
const moviesContainer = document.getElementById('movies-container');
const search = document.getElementById('search-btn');

get('navbar-brand').onclick = () => {
  registerSuccessBanner.classList.add('d-none');
  loginForm.classList.add('d-none');
  loginSucsesBaner.classList.add('d-none');
  loginUnsucsesBaner.classList.add('d-none');
  registerForm.classList.add('d-none');
  mainBanner.classList.remove('d-none');
  // makeBaner();
};
get('clickAfterLoginSuccessBtn').onclick = () => {
  registerForm.classList.add('d-none');
  registerSuccessBanner.classList.add('d-none');
  loginForm.classList.add('d-none');
  loginSucsesBaner.classList.add('d-none');
  loginUnsucsesBaner.classList.add('d-none');

  mainBanner.classList.remove('d-none');
};
get('nav-login active').onclick = () => {
  registerSuccessBanner.classList.add('d-none');
  loginSucsesBaner.classList.add('d-none');
  loginUnsucsesBaner.classList.add('d-none');
  registerForm.classList.add('d-none');
  mainBanner.classList.add('d-none');
  loginForm.classList.remove('d-none');
};
get('nav-reg active').onclick = () => {
  registerSuccessBanner.classList.add('d-none');
  loginForm.classList.add('d-none');
  loginSucsesBaner.classList.add('d-none');
  loginUnsucsesBaner.classList.add('d-none');
  mainBanner.classList.add('d-none');
  registerForm.classList.remove('d-none');
};

get('register-submit').onclick = () => {
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

get('clickToLoginBtn').onclick = () => {
  registerSuccessBanner.classList.add('d-none');
  loginForm.classList.remove('d-none');
};

get('login-submit').onclick = () => {
  loginForm.classList.add('d-none');
  const userHast = users.some(
    (user) =>
      user.email === loginEmail.value && user.password === loginPassword.value
  );
  if (userHast === true) {
    loginSucsesBaner.classList.remove('d-none');
  } else {
    loginUnsucsesBaner.classList.remove('d-none');
  }
};

const movieCardV2 = (imgUrl, title, description) => {
  const div = document.createElement('div');
  div.classList.add('card');
  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.src = imgUrl;
  div.appendChild(img);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerText = title;
  cardBody.appendChild(cardTitle);

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerText = description;
  cardBody.appendChild(cardText);

  div.appendChild(cardBody);
};

const movieCard = (imgUrl, title, description) => {
  return `<div class="card">
  <img
  src="${imgUrl}"
  class="card-img-top"
  />
  <div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text">${description}</p>
  </div> </div>`;
};
const erorHTML = `<h1 class="lg:text-[10rem] text-[2.5rem] leading-[3.6rem] font-bold mb-8"> Not Found</h1>`;

const makeBaner = (movies) => {
  let moviesHTML = '';
  for (const movie of movies) {
    const movieHTML = movieCard(movie.image.medium, movie.name, '');
    moviesHTML += movieHTML;
  }
  console.log(moviesContainer);
  moviesContainer.innerHTML = moviesHTML;
};

fetch('http://api.tvmaze.com/shows')
  .then((response) => response.json())
  .then((data) => {
    // data = [shows = {}]
    makeBaner(data);
  });

get('search-icon').onclick = () => {
  const searchInput = search.value;
  console.log('searchInput: ', searchInput);
  fetch(`http://api.tvmaze.com/search/shows?q=${searchInput}`)
    .then((response) => response.json())
    .then((data) => {
      // data  = [score ={}, shows = {}]
      const shows = [];
      for (const item of data) {
        shows.push(item.show);
      }
      makeBaner(shows);
    });
};
