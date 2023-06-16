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
