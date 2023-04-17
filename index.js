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
const whatchShow = document.getElementById("clickAfterLoginSuccessBtn");
const moviesContainer = document.getElementById("movies-container");
const searchIcon = document.getElementById("search-icon");
const search = document.getElementById("search-btn");

navbarLogo.onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  registerForm.classList.add("d-none");
  mainBanner.classList.remove("d-none");
  fsearch = "";
  yagonchiz("");
};
whatchShow.onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  registerForm.classList.add("d-none");
  mainBanner.classList.remove("d-none");
};
navbarLogin.onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginSucsesBaner.classList.add("d-none");
  loginUnsucsesBaner.classList.add("d-none");
  registerForm.classList.add("d-none");
  mainBanner.classList.add("d-none");
  loginForm.classList.remove("d-none");
};
navbarRegister.onclick = () => {
  registerSuccessBanner.classList.add("d-none");
  loginForm.classList.add("d-none");
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

const movieCard = (imgUrl, title, description) => {
  return `<div class="card">
  <img
  src="${imgUrl}"
  class="card-img-top"
  alt="..."
  />
  <div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text">${description}</p>
  </div>
  </div>`;
};

const movies = [
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/456/1140585.jpg",
    title: "This Is Mark Rober",
    description: "Elephant Toothpaste ",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061065.jpg",
    title: "Grey's Anatomy",
    description: "Elephant Toothpaste",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/424/1060718.jpg",
    title: "Young Sheldon",
    description: "A German Folk Song and an Actual Adult",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061060.jpg",
    title: "Station 19",
    description: "Get It All Out",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/427/1068494.jpg",
    title: "CSI: Vegas",
    description: "Fractured",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/422/1055236.jpg",
    title: "Ghosts",
    description: "Ghost Father of the Bride",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/456/1140582.jpg",
    title: "Single Drunk Female",
    description: "Promotion",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/455/1139659.jpg",
    title: "'Til Death Do Us Part Kourtney & Travis",
    description: "Til Death Do Us Part Kourtney & Travis",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/456/1140584.jpg",
    title: "Headliners with Rachel Nichols",
    description: "TBD",
  },
  {
    imgUrl:
      "https://static.tvmaze.com/uploads/images/medium_portrait/441/1104117.jpg",
    title: "The Best of All the Smoke with Matt Barnes and Stephen Jackson",
    description: "Magic Johnson",
  },
];

// let moviesHTML = "";
// for (const movie of movies) {
//   const movieHTML = movieCard(movie.imgUrl, movie.title, movie.description);
//   moviesHTML += movieHTML;
// }
// moviesContainer.innerHTML = moviesHTML;

//search function

function yagonchiz(yak) {
  const find = movies.filter(function (search) {
    if (yak === "") {
      return true;
    }

    return search.title === yak;
  });
  console.log(find);
  let moviesHTML = "";
  for (const movie of find) {
    const movieHTML = movieCard(movie.imgUrl, movie.title, movie.description);
    moviesHTML += movieHTML;
  }
  moviesContainer.innerHTML = moviesHTML;
}

searchIcon.onclick = () => {
  const find = movies.filter(function (search) {
    if (search.value === "") {
      return true;
    }
    return search.title === search.value;
  });
  let moviesHTML = "";
  for (const movie of find) {
    const movieHTML = movieCard(movie.imgUrl, movie.title, movie.description);
    moviesHTML += movieHTML;
  }
  moviesContainer.innerHTML = moviesHTML;
};

const find = movies.filter(function (search) {
  if (fsearch === "") {
    return true;
  }
  return search.title === fsearch;
});
let moviesHTML = "";
for (const movie of find) {
  const movieHTML = movieCard(movie.imgUrl, movie.title, movie.description);
  moviesHTML += movieHTML;
}
moviesContainer.innerHTML = moviesHTML;
