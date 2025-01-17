const URL='http://www.omdbapi.com/?i=tt3896198&apikey=c37bc01f'
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchBtn');
const movieResults = document.getElementById('movieResults');
const favResults = document.getElementById('favorites');


let favmov=JSON.parse(localStorage.getItem('favorite'))||[];

document.addEventListener('DOMContentLoaded',()=>displayFav());

// fetch(URL)
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error));

async function fetchMovies(query) {
    try{
        const response=await fetch(`${URL}&s=${query}`);
        const data=await response.json();
        if(data.Response==='True') displayMovies(data.Search);
        else movieResults.innerHTML=`<h4>No movies for the query ${query}</h4>`;
        // console.log(data)
    }
    catch(error){
        console.log(error);
    }
}
function displayMovies(movies){
    movieResults.innerHTML = "";
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        `;
        movieCard.classList = "movie-card";
        const button = document.createElement('button');
        button.textContent = "Add to Favorites";
        button.onclick = () => addFav(movie.Title, movie.imdbID, movie.Poster, movie.Year); 
        movieCard.appendChild(button);
        movieResults.appendChild(movieCard);
    });
}
function displayFav(){
    favResults.innerHTML = "";
    favmov.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        `;
        movieCard.classList = "movie-card";
        const button = document.createElement('button');
        button.textContent = "Remove";
        button.onclick = () => remFav(movie.id); 
        movieCard.appendChild(button);
        favResults.appendChild(movieCard);
    });
}
function remFav(id){
    console.log(id,typeof id);
    favmov=favmov.filter((movie)=> movie.id!==id);
    console.log(favmov);
    localStorage.setItem('favorite',JSON.stringify(favmov));
    displayFav();
}
function  addFav(Title,id,Poster,Year){
    if(favmov.some((movie)=> movie.id==id))return;
    favmov.push({id,Title,Poster,Year}); 
    localStorage.setItem('favorite',JSON.stringify(favmov));
    displayFav()
}
searchButton.addEventListener('click',()=>{
    const query=searchInput.value.trim();
    if(query){
        fetchMovies(query);
    }
})