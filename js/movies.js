const movieContainer = document.querySelector("#movie-container");
let movies = [];

//getMovies() retrieves data from a server endpoint /getMovies using the fetch.
//It then creates an HTML element for each movie item in the data, and appends it to the movieContainer element in the DOM.
//The function is invoked at the end of the script to display the movie content on the web page.
async function getMovies() {
    try {
        const response = await fetch("/app/getMovies");
        const data = await response.json();

        movies = data;
        movies.forEach((movie) => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");

            const moviePoster = document.createElement("img");
            moviePoster.src = movie.image;
            //moviePoster.alt = `${movie.image} Poster`;
            movieCard.appendChild(moviePoster);

            const movieInfo = document.createElement("div");
            movieInfo.classList.add("movie-info");

            const movieTitle = document.createElement("h3");
            movieTitle.classList.add("movie-title");
            movieTitle.textContent = movie.name;
            movieInfo.appendChild(movieTitle);

            const genreType = document.createElement("p");
            genreType.classList.add("movie-genre");
            genreType.textContent = `Genre: ${movie.genre}`;
            movieInfo.appendChild(genreType);

            const movieLength = document.createElement("p");
            movieLength.classList.add("movie-length");
            movieLength.textContent = movie.length;
            movieInfo.appendChild(movieLength);

            const movieDescription = document.createElement("p");
            movieDescription.classList.add("movie-description");
            movieDescription.textContent = movie.description;
            movieInfo.appendChild(movieDescription);

            movieCard.appendChild(movieInfo);

            movieContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error(error);
    }
}

getMovies();
