const API_KEY =  "f56bbb3a";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}` ;
const IMG_URL = `http://www.omdbapi.com/?apikey=${API_KEY}` ;

let elform = document.querySelector("[data-movie-form]");
let ellist = document.querySelector("[data-movie-list]");
let eldata = document.querySelector("[data-top]")

elform.addEventListener("submit", (evt) =>{
    evt.preventDefault();

    const formData = new FormData(elform);
    const name = formData.get("name");
    searchMovies(name);
})

async function searchMovies(query) {
    const res = await fetch(`${API_URL}&s=${query}`);
    const searchResult = await res.json()

    renderMovies(searchResult.Search)
}

function renderMovies(movies) {
    ellist.innerHTML = "";
    let html = ""
    movies.forEach(movie => {
       html += `<li><img width="50" src="${movie.Poster}" alt="${movie.Title}"/>${movie.Title}</li>` 
    });
    ellist.innerHTML = html
}