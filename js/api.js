const API_KEY =  "f56bbb3a";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}` ;
const IMG_URL = `http://www.omdbapi.com/?apikey=${API_KEY}` ;

let elform = document.querySelector("[data-movie-form]");
let ellist = document.querySelector("[data-movie-list]");
let eldata = document.querySelector("[data-top]");
var elboxadd = document.querySelector("[data-add-box-movie]");
var eltemplate = document.querySelector("[data-template-card]");
//let elForm = document.querySelector("[data-movie-form]");

elform.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const form = new FormData(elform);
  const name = form.get("search");
  searchMovies(name);
});

async function searchMovies(query) {
      let response = await fetch(`${API_KEY}&s=${query}`);
      let result = await response.json();
      renderMovie(result);
  }
  
  function renderMovie(arrayFirst) {
    let array = arrayFirst.Search;
    elboxadd.innerHTML = "";
    array.forEach((movie) => {
        elboxadd.appendChild(createLi(movie));
    });
  }
  
  function createLi(movie) {
    const card = eltemplate.content.cloneNode(true);
    card.querySelector("[data-movie-poster]").src = movie.Poster;
    card.querySelector("[data-movie-poster]").alt = movie.Title;
    card.querySelector("[data-title-movie]").textContent = movie.Title;
  //  card.querySelector("[data-movie-id]").dataset.id = movie.imdbID;
    return card;
  }