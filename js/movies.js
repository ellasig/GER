const movies = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster: "https://image.tmdb.org/t/p/w300/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=6hB3S9bIaco",
        length: "2h 22min",

    },
    {
        title: "The Godfather",
        year: 1972,
        description:
            "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        poster: "https://image.tmdb.org/t/p/w300/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=sY1S34973zA",
        length: "2h 58min",

    },
    {
        title: "The Dark Knight",
        year: 2008,
        description:
            "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        poster: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        length: "2h 32min",

    },
];

const movieContainer = document.querySelector("#movie-container");

movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const moviePoster = document.createElement("img");
    moviePoster.src = movie.poster;
    moviePoster.alt = `${movie.title} Poster`;
    movieCard.appendChild(moviePoster);

    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie-info");

    const movieTitle = document.createElement("h3");
    movieTitle.classList.add("movie-title");
    movieTitle.textContent = movie.title;
    movieInfo.appendChild(movieTitle);


    const movieYear = document.createElement("p");
    movieYear.classList.add("movie-year");
    movieYear.textContent = movie.year;
    movieInfo.appendChild(movieYear);

    const movieLength = document.createElement("p");
    movieLength.classList.add("movie-length");
    movieLength.textContent = `${movie.length}`;
    movieInfo.appendChild(movieLength);

    const movieDescription = document.createElement("p");
    movieDescription.classList.add("movie-description");
    movieDescription.textContent = movie.description;
    movieInfo.appendChild(movieDescription);

    const watchTrailerButton = document.createElement("button");
    watchTrailerButton.classList.add("watch-trailer");
    watchTrailerButton.textContent = "Watch Trailer";
    watchTrailerButton.addEventListener("click", () => {
        window.open(movie.trailerUrl);
    });
    movieInfo.appendChild(watchTrailerButton);

    movieCard.appendChild(movieInfo);

    movieContainer.appendChild(movieCard);




//favorites
    const favoriteMovies = [];

    const favoriteButton = document.createElement("button");
    favoriteButton.classList.add("favorite-button");
    favoriteButton.innerHTML = '<i class="fas fa-heart"></i> Add to Favorites';

// Check if the movie is already in favorites
    const isInFavorites = () => {
        return favoriteMovies.includes(movies);
    };

// Toggle the button text based on whether the movie is in favorites
    const toggleButtonText = () => {
        if (isInFavorites()) {
            favoriteButton.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
        } else {
            favoriteButton.innerHTML = '<i class="fas fa-heart"></i> Add to Favorites';
        }
    };

    toggleButtonText(); // Set the initial button text based on whether the movie is in favorites

    favoriteButton.addEventListener("click", () => {
        if (isInFavorites()) {
            const index = favoriteMovies.indexOf(movies);
            if (index > -1) {
                favoriteMovies.splice(index, 1);
            }
        } else {
            favoriteMovies.push(movies);
        }
        toggleButtonText(); // Toggle the button text after the favoriteMovies array is updated
    });

    movieInfo.appendChild(favoriteButton);



});



