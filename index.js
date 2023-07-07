let movies = [];

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
const mainBanner = document.getElementById("movies-container");
const moviesContainer = document.getElementById("movies-container");
const search = document.getElementById("search-btn");
const aboutFilim = document.getElementById("kino-haqida-container");
const py3 = document.getElementById("breadcrumb-item");
const tabTopic = document.getElementById("tabs-topic");

get("navbar-brand").onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  registerForm.classList.add("d-none");
  aboutFilim.classList.add("d-none");
  mainBanner.classList.remove("d-none");
  personContainer.classList.add("d-none");
};
get("homeBtn").onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  registerForm.classList.add("d-none");
  mainBanner.classList.remove("d-none");
  aboutFilim.classList.add("d-none");
  personContainer.classList.add("d-none");
};

get("clickAfterLoginSuccessBtn").onclick = () => {
  registerForm.classList.add("d-none");
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  mainBanner.classList.remove("d-none");
  aboutFilim.classList.add("d-none");
  personContainer.classList.add("d-none");
};
get("nav-login active").onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  registerForm.classList.add("d-none");
  mainBanner.classList.add("d-none");
  loginForm.classList.remove("d-none");
  aboutFilim.classList.add("d-none");
  personContainer.classList.add("d-none");
};
get("nav-reg active").onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  mainBanner.classList.add("d-none");
  registerForm.classList.remove("d-none");
  aboutFilim.classList.add("d-none");
  personContainer.classList.add("d-none");
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

get("clickToLoginBtn").onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.remove("d-none");
  aboutFilim.classList.add("d-none");
  personContainer.classList.add("d-none");
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
const erorHTML = `<h1 class="lg:text-[10rem] text-[2.5rem] leading-[3.6rem] font-bold mb-8"> Not Found</h1>`;
get("search-icon").onclick = () => {
  const searchInput = search.value;
  console.log("searchInput: ", searchInput);
  fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    .then((response) => response.json())
    .then((data) => {
      // data  = [score ={}, shows = {}]
      const shows = [];
      for (const item of data) {
        shows.push(item.show);
      }
      movies = shows;
      makeBaner();
    });
};

function makeBtn(name) {
  const makeBtnHTML = `<a href="#" id="homeBtn">Home /</a>
  <a href="#" id="${name}">${name}</a>`;
  const tabsHTML = `<h1>${name}</h1>`;
  tabTopic.innerHTML = tabsHTML;
  py3.innerHTML = makeBtnHTML;
}
