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
