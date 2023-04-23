// const movies =  htmlba scripta danashba
// const users =  htmlba scripta danashba

const get = (elId) => {
  return document.getElementById(elId);
};

const registerForm = document.getElementById("regisration-form");
const registerSuccessBanner = document.getElementById(
  "regisration-success-bunner"
);
const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginSucsesBaner = document.getElementById("login-success-bunner");
const loginUnsucsesBaner = document.getElementById("login-unsuccess-bunner");
const mainBanner = document.getElementById("main");
const moviesContainer = document.getElementById("movies-container");
const search = document.getElementById("search-btn");
//const clickToLoginBtn = document.getElementById("clickToLoginBtn");
//const navbarLogin = document.getElementById("nav-login active");
//const navbarLogo = document.getElementById("navbar-brand");
//const navbarRegister = document.getElementById("nav-reg active");
//const whatchShow = document.getElementById("clickAfterLoginSuccessBtn");
//const searchIcon = document.getElementById("search-icon");

get('navbar-brand').onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  registerForm.classList.add("d-none");
  mainBanner.classList.remove("d-none");
  makeBaner("");
};
get('clickAfterLoginSuccessBtn').onclick = () => {
  registerForm.classList.add("d-none");
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");

  mainBanner.classList.remove("d-none");
};
get('nav-login active').onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  registerForm.classList.add("d-none");
  mainBanner.classList.add("d-none");
  loginForm.classList.remove("d-none");
};
get('nav-reg active').onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  mainBanner.classList.add("d-none");
  registerForm.classList.remove("d-none");
};

get("register-submit").onclick = () => {
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

get('clickToLoginBtn').onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.remove("d-none");
};

get("login-submit").onclick = () => {
  loginForm.classList.add("d-none");
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

const makeBaner = () => {
  const searchInput = search.value;
  const filteredMovies = movies.filter((movie) => {
    return searchInput === "" ? true : movie.title === searchInput;
  });

  if (filteredMovies.length === 0) {
    moviesContainer.innerHTML = erorHTML;
  } else {
    let moviesHTML = "";
    for (const movie of filteredMovies) {
      const movieHTML = movieCard(movie.imgUrl, movie.title, movie.description);
      moviesHTML += movieHTML;
    }
    moviesContainer.innerHTML = moviesHTML;
  }
};

get('search-icon').onclick = makeBaner;
makeBaner();
