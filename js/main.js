let elbox = document.querySelector("[data-box-movies]");
let eltemplate = document.querySelector("[data-template]");
let elsearchmovies = document.querySelector("[data-search]");
let elinfo = document.querySelector("[data-favourite-list]");

//render
rendermovies(movies);
function rendermovies(movies) {
  elbox.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    elbox.appendChild(createelbox(movie));
  }
}

function createelbox(movie) {
  const card = eltemplate.content.cloneNode(true);
  card.querySelector("[data-name]").innerHTML = movie.original_title;
  card.querySelector(
    "[data-poster-path]"
  ).src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  card.querySelector("[data-reyting]").textContent = movie.popularity;
  card.querySelector("[data-langue]").textContent = movie.original_language;
  card.querySelector("[data-btnn]").textContent = movie.video;
  // elinfo.textContent = movie.overview

  return card;
}

//search

elsearchmovies.addEventListener("keyup", (evt) => {
  evt.preventDefault();

  const moviessearch = movies.filter((movie) =>
    movie.original_title
      .toLowerCase()
      .includes(elsearchmovies.value.toLowerCase())
  );

  rendermovies(moviessearch);
});

//modal

// document.addEventListener("click", (e) => {
//    onModalButtonClick(e)
// })

// function onModalButtonClick(evt) {
//    const el = evt.target.closest("[data-modal-open]");

//    if (!el) return;

//    const modalSelector = el.dataset.ModalOpen;

//    document.querySelector(modalSelector).classList.add("show");
// }

//sort
let elsort = document.querySelector("[data-sort]");
elsort.addEventListener("click", (e) => {
  movies.sort((a, b) => {
    return a.popularity - b.popularity;
  });
  rendermovies(movies);
});

let elalifbo = document.querySelector("[data-alif]");

elalifbo.addEventListener("click", (e) => {
  const sortedPokemon = movies.sort(
    (a, b) => a.original_title.charCodeAt() - b.original_title.charCodeAt()
  );
  rendermovies(sortedPokemon);
});

//add
rendermovies(movies);

let elform = document.querySelector("[data-form]");
let elname = document.querySelector("[data-name-kino]");
let elreyting = document.querySelector("[data-reyting]");
let ellangue = document.querySelector("[data-langue]");

elform.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const movie = {
    name: null,
    height: null,
    weight: null,
    img: null,
    type: [],
  };

  movie.original_title = elname.value;
  movie.popularity = elreyting.value;
  movie.original_language = ellangue.value;

  movies.unshift(movie);
  rendermovies(movies);
});
