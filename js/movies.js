const contentContainer = document.querySelector("#movie-container");
let movies = [];

async function getMovies() {
    try {
        const response = await fetch("http://localhost:3000/getMovies");
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

            contentContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error(error);
    }
}

getMovies();
