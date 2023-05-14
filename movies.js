// fetch
const movie = {
  id: 3,
  url: "https://www.tvmaze.com/shows/3/bitten",
  name: "Bitten",
  type: "Scripted",
  language: "English",
  genres: ["Drama", "Horror", "Romance"],
  status: "Ended",
  runtime: 60,
  averageRuntime: 60,
  premiered: "2014-01-11",
  ended: "2016-04-15",
  officialSite: "http://bitten.space.ca/",
  schedule: {
    time: "22:00",
    days: ["Friday"],
  },
  rating: {
    average: 7.5,
  },
  weight: 94,
  network: {
    id: 7,
    name: "CTV Sci-Fi Channel",
    country: {
      name: "Canada",
      code: "CA",
      timezone: "America/Halifax",
    },
    officialSite: "https://www.ctv.ca/sci-fi",
  },
  webChannel: null,
  dvdCountry: null,
  externals: {
    tvrage: 34965,
    thetvdb: 269550,
    imdb: "tt2365946",
  },
  image: {
    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg",
  },
  summary:
    '<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world\'s only female werewolf. An orphan, Elena thought she finally found her "happily ever after" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>',
  updated: 1665307838,
  _links: {
    self: {
      href: "https://api.tvmaze.com/shows/3",
    },
    previousepisode: {
      href: "https://api.tvmaze.com/episodes/631862",
    },
  },
};
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

function makeBener(name) {
  name = move.name;
  console.log(name);
}

// const movies = [
//   {
//     imgUrl:
//       "https://static.tvmaze.com/uploads/images/medium_portrait/456/1140585.jpg",
//     title: "This Is Mark Rober",
//     description: "Elephant Toothpaste ",
//   },
//   {
//     imgUrl:
//       "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061065.jpg",
//     title: "Grey's Anatomy",
//     description: "Elephant Toothpaste",
//   },
//   {
//     imgUrl:
//       "https://static.tvmaze.com/uploads/images/medium_portrait/424/1060718.jpg",
//     title: "Young Sheldon",
//     description: "A German Folk Song and an Actual Adult",
//   },
//   {
//     imgUrl:
//       "https://static.tvmaze.com/uploads/images/medium_portrait/424/1061060.jpg",
//     title: "Station 19",
//     description: "Get It All Out",
//   },
//   {
//     imgUrl:
//       "https://static.tvmaze.com/uploads/images/medium_portrait/427/1068494.jpg",
//     title: "CSI: Vegas",
//     description: "Fractured",
//   },
//   {
//     imgUrl:
//       "https://static.tvmaze.com/uploads/images/medium_portrait/422/1055236.jpg",
//     title: "Ghosts",
//     description: "Ghost Father of the Bride",
//   },
//   {
//     imgUrl:
//       "https://static.tvmaze.com/uploads/images/medium_portrait/456/1140582.jpg",
//     title: "Single Drunk Female",
//     description: "Promotion",
//   },
//   {
//     imgUrl:
//       "https://static.tvmaze.com/uploads/images/medium_portrait/455/1139659.jpg",
//     title: "'Til Death Do Us Part Kourtney & Travis",
//     description: "Til Death Do Us Part Kourtney & Travis",
//   },
//   {
//     imgUrl:
//       "https://static.tvmaze.com/uploads/images/medium_portrait/456/1140584.jpg",
//     title: "Headliners with Rachel Nichols",
//     description: "TBD",
//   },
//   {
//     imgUrl:
//       "https://static.tvmaze.com/uploads/images/medium_portrait/441/1104117.jpg",
//     title: "The Best of All the Smoke with Matt Barnes and Stephen Jackson",
//     description: "Magic Johnson",
//   },
// ];
