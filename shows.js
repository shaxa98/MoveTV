// // kinoya kategoriyesh

// const baner = `<img
// style="
//   display: block;
//   -webkit-user-select: none;
//   margin: auto;
//   cursor: zoom-in;
//   background-color: hsl(0, 0%, 90%);
//   transition: background-color 300ms;
// "
// src="https://raw.githubusercontent.com/Bekhzod96/TvMazeApp/master/public/images/result_2.png"
// width="575"
// height="528"
// />`;

// const movieCard = (imgUrl, title, id, description) => {
//   return `<div class="card" onclick="cardClick(${id})">
//   <img
//   src="${imgUrl}"
//   class="card-img-top"
//   />
//   <div class="card-body">
//   <h5 class="card-title">${title}</h5>
//   <p class="card-text">${description}</p>
//   </div> </div>`;
// };

// const makeBaner = () => {
//   let moviesHTML = "";
//   for (const movie of movies) {
//     const movieHTML = movieCard(movie.image?.medium, movie.name, movie.id);
//     moviesHTML += movieHTML;
//   }
//   moviesContainer.innerHTML = moviesHTML;
// };
// fetch("https://api.tvmaze.com/shows")
//   .then((response) => response.json())
//   .then((data) => {
//     movies = data;
//     makeBaner();
//   });

// function makeMove(img, name, summary, genres1, genres2, genres3, image) {
//   return ` <div class="kino-haqida-container-img">
//   <img
//     width="100%"
//     src=${img}
//     alt=""
//   />
//   <button class="kino-haqida-container-img-btn">Watch</button>
// </div>
// <div class="kino-haqida-container-description">
//   <div class="kino-haqida-container-description-title">${name}</div>
//   <div class="kino-haqida-container-description-genre">
//     <span>${genres1}</span>
//     <span>${genres2}</span>
//     <span>${genres3}</span>
//   </div>
//   <div class="kino-haqida-container-description-p">${summary}</div>
// </div>
// <style>
// .kino-haqida-container {
//   background-image: url("${image}");
// }
// </style>`;
// }
// function cardClick(id) {
//   let yoftem = {};
//   for (const kino of movies) {
//     if (kino.id === id) {
//       yoftem = kino;
//       mainBanner.classList.add("d-none");
//       aboutFilim.classList.remove("d-none");
//     }
//   }
//   const makeMoveHTML = makeMove(
//     yoftem.image.medium,
//     yoftem.name,
//     yoftem.summary,
//     yoftem.genres[0],
//     yoftem.genres[1],
//     yoftem.genres[2],
//     yoftem.image.original
//   );
//   aboutFilim.innerHTML = makeMoveHTML;
// }

// get("TabShows").onclick = () => {
//     registerSuccessBanner.classList.add("d-none");
//     loginForm.classList.add("d-none");
//     loginSucsesBaner.classList.add("d-none");
//     loginUnsucsesBaner.classList.add("d-none");
//     registerForm.classList.add("d-none");
//     mainBanner.classList.remove("d-none");
//     aboutFilim.classList.add("d-none");
//     personContainer.classList.add("d-none");
//     makeBtn("Shows");
//   };
