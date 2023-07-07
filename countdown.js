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
