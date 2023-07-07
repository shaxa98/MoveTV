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
