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
get("TabShows").onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  registerForm.classList.add("d-none");
  mainBanner.classList.remove("d-none");
  aboutFilim.classList.add("d-none");
  personContainer.classList.add("d-none");
  makeBtn("Shows");
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

// kinoya kategoriyesh

const baner = `<img
style="
  display: block;
  -webkit-user-select: none;
  margin: auto;
  cursor: zoom-in;
  background-color: hsl(0, 0%, 90%);
  transition: background-color 300ms;
"
src="https://raw.githubusercontent.com/Bekhzod96/TvMazeApp/master/public/images/result_2.png"
width="575"
height="528"
/>`;

const movieCard = (imgUrl, title, id, description) => {
  return `<div class="card" onclick="cardClick(${id})">
  <img
  src="${imgUrl}"
  class="card-img-top"
  />
  <div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text">${description}</p>
  </div> </div>`;
};

const makeBaner = () => {
  let moviesHTML = "";
  for (const movie of movies) {
    const movieHTML = movieCard(movie.image?.medium, movie.name, movie.id);
    moviesHTML += movieHTML;
  }
  moviesContainer.innerHTML = moviesHTML;
};
fetch("https://api.tvmaze.com/shows")
  .then((response) => response.json())
  .then((data) => {
    movies = data;
    makeBaner();
  });

function makeMove(img, name, summary, genres1, genres2, genres3, image) {
  return ` <div class="kino-haqida-container-img">
  <img
    width="100%"
    src=${img}
    alt=""
  />
  <button class="kino-haqida-container-img-btn">Watch</button>
</div>
<div class="kino-haqida-container-description">
  <div class="kino-haqida-container-description-title">${name}</div>
  <div class="kino-haqida-container-description-genre">
    <span>${genres1}</span>
    <span>${genres2}</span>
    <span>${genres3}</span>
  </div>
  <div class="kino-haqida-container-description-p">${summary}</div>
</div>
<style>
.kino-haqida-container {
  background-image: url("${image}");
}
</style>`;
}
function cardClick(id) {
  let yoftem = {};
  for (const kino of movies) {
    if (kino.id === id) {
      yoftem = kino;
      mainBanner.classList.add("d-none");
      aboutFilim.classList.remove("d-none");
    }
  }
  const makeMoveHTML = makeMove(
    yoftem.image.medium,
    yoftem.name,
    yoftem.summary,
    yoftem.genres[0],
    yoftem.genres[1],
    yoftem.genres[2],
    yoftem.image.original
  );
  aboutFilim.innerHTML = makeMoveHTML;
}
