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
