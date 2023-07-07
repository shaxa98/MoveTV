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
