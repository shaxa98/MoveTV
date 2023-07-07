// Shows Tab

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

//People Tab

let people = [];
const personKard = (img, Pname) => {
  return ` <div class="card">
    <img
      src="${img}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="name">${Pname}</h5>
      
    </div>
  </div>`;
};
let personContainer = document.getElementById("people-container");
function makePersonContainer() {
  let personsHTML = "";
  for (const peoples of people) {
    const img =
      peoples.image?.medium ||
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
    const personHTML = personKard(img, peoples.name);
    personsHTML += personHTML;
  }
  personContainer.innerHTML = personsHTML;
}

fetch("https://api.tvmaze.com/people")
  .then((response) => response.json())
  .then((data) => {
    people = data;
    setTimeout(makePersonContainer, 1500);
  });

get("TabPeople").onclick = () => {
  mainBanner.classList.add("d-none");
  personContainer.classList.remove("d-none");
  makeBtn("People");
};

//Network Tab

let network = [];
const networkCard = (img, Pname) => {
  return ` <div class="card">
    <img
      src="${img}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="name">${Pname}</h5>
      
    </div>
  </div>`;
};
let networkContainer = document.getElementById("network-container");
function makeNetworkContainer() {
  let networksHTML = "";
  for (const networks of network) {
    const img =
      networks.image?.medium ||
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
    const networkHTML = networkCard(img, networks.name);
    networksHTML += networkHTML;
  }
  networkContainer.innerHTML = networksHTML;
}

fetch("https://api.tvmaze.com/people")
  .then((response) => response.json())
  .then((data) => {
    network = data;
    setTimeout(makeNetworkContainer, 1500);
  });

get("TAbNetwork").onclick = () => {
  mainBanner.classList.add("d-none");
  personContainer.classList.add("d-none");
  networkContainer.classList.remove("d-none");
  makeBtn("Network");
};

// Web Chanel Tab
let Chanel = [];
const ChanelCard = (img, Pname) => {
  return ` <div class="card">
    <img
      src="${img}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="name">${Pname}</h5>
      
    </div>
  </div>`;
};
let ChanelContainer = document.getElementById("Chanel-container");
function makeChanelContainer() {
  let ChanelsHTML = "";
  for (const Chanels of Chanel) {
    const img =
      Chanels.image?.medium ||
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
    const ChanelHTML = ChanelCard(img, Chanels.name);
    ChanelsHTML += ChanelHTML;
  }
  ChanelContainer.innerHTML = ChanelsHTML;
}

fetch("https://api.tvmaze.com/people")
  .then((response) => response.json())
  .then((data) => {
    Chanel = data;
    setTimeout(makeChanelContainer, 1500);
  });

get("TabWebchanels").onclick = () => {
  mainBanner.classList.add("d-none");
  personContainer.classList.add("d-none");
  ChanelContainer.classList.remove("d-none");
  makeBtn("Web Chanels");
};

//Articles Tab

let articles = [];
const articlesCard = (img, Pname) => {
  return ` <div class="card">
    <img
      src="${img}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="name">${Pname}</h5>
      
    </div>
  </div>`;
};
let articlesContainer = document.getElementById("articles-container");
function makeArticlesContainer() {
  let articlessHTML = "";
  for (const articless of articles) {
    const img =
      articless.image?.medium ||
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
    const articlesHTML = articlesCard(img, articless.name);
    articlessHTML += articlesHTML;
  }
  articlesContainer.innerHTML = articlessHTML;
}

fetch("https://api.tvmaze.com/people")
  .then((response) => response.json())
  .then((data) => {
    articles = data;
    setTimeout(makeArticlesContainer, 1500);
  });

get("TabArticles").onclick = () => {
  mainBanner.classList.add("d-none");
  personContainer.classList.add("d-none");
  articlesContainer.classList.remove("d-none");
  makeBtn("Articles");
};

//Countdown Tab

let Countdown = [];
const CountdownCard = (img, Pname) => {
  return ` <div class="card">
    <img
      src="${img}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="name">${Pname}</h5>
      
    </div>
  </div>`;
};
let CountdownContainer = document.getElementById("Countdown-container");
function makeCountdownContainer() {
  let CountdownsHTML = "";
  for (const Countdowns of Countdown) {
    const img =
      Countdowns.image?.medium ||
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
    const CountdownHTML = CountdownCard(img, Countdowns.name);
    CountdownsHTML += CountdownHTML;
  }
  CountdownContainer.innerHTML = CountdownsHTML;
}

fetch("https://api.tvmaze.com/people")
  .then((response) => response.json())
  .then((data) => {
    Countdown = data;
    setTimeout(makeCountdownContainer, 1500);
  });

get("TabCountdown").onclick = () => {
  mainBanner.classList.add("d-none");
  personContainer.classList.add("d-none");
  CountdownContainer.classList.remove("d-none");
  makeBtn("Countdown");
};

// Forums Tab

let Forum = [];
const ForumCard = (img, Pname) => {
  return ` <div class="card">
    <img
      src="${img}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="name">${Pname}</h5>
      
    </div>
  </div>`;
};
let ForumContainer = document.getElementById("Forum-container");
function makeForumContainer() {
  let ForumsHTML = "";
  for (const Forums of Forum) {
    const img =
      Forums.image?.medium ||
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";
    const ForumHTML = ForumCard(img, Forums.name);
    ForumsHTML += ForumHTML;
  }
  ForumContainer.innerHTML = ForumsHTML;
}

fetch("https://api.tvmaze.com/people")
  .then((response) => response.json())
  .then((data) => {
    Forum = data;
    setTimeout(makeForumContainer, 1500);
  });

get("TabForum").onclick = () => {
  mainBanner.classList.add("d-none");
  personContainer.classList.add("d-none");
  ForumContainer.classList.remove("d-none");
  makeBtn("Forum");
};
