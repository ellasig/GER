const tvShows = [
    {
        title: "The Last of Us",
        year: 2013,
        description:
            "In a post-apocalyptic world, a man and a teenage girl must work together to survive against a threat like no other.",
        poster: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/11/last-of-us-tv-1.png?resize=768%2C1138&ssl=1",
        trailerUrl: "https://www.youtube.com/watch?v=W01L70IGBgE",
        length: "1 season (upcoming)",
    },
    {
        title: "Stranger Things",
        year: 2016,
        description:
            "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
        poster: "https://image.tmdb.org/t/p/w300/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=XWxyRG_tckY",
        length: "4 seasons",
    },
    {
        title: "Game of Thrones",
        year: 2011,
        description:
            "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
        poster: "https://image.tmdb.org/t/p/w300/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=rlR4PJn8b8I",
        length: "8 seasons",
    },

    {
        title: "Friends",
        year: 1994,
        description:
            "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
        poster: "https://image.tmdb.org/t/p/w300/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=hDNNmeeJs1Q",
        length: "10 seasons",
    },

];

const tvShowContainer = document.querySelector("#tv-show-container");

tvShows.forEach((tvShow) => {
    const tvShowCard = document.createElement("div");
    tvShowCard.classList.add("tv-show-card");

    const tvShowPoster = document.createElement("img");
    tvShowPoster.src = tvShow.poster;
    tvShowPoster.alt = `${tvShow.title} Poster`;
    tvShowCard.appendChild(tvShowPoster);

    const tvShowInfo = document.createElement("div");
    tvShowInfo.classList.add("tv-show-info");

    const tvShowTitle = document.createElement("h3");
    tvShowTitle.classList.add("tv-show-title");
    tvShowTitle.textContent = tvShow.title;
    tvShowInfo.appendChild(tvShowTitle);

    const tvShowYear = document.createElement("p");
    tvShowYear.classList.add("tv-show-year");
    tvShowYear.textContent = tvShow.year;
    tvShowInfo.appendChild(tvShowYear);

    const tvShowLength = document.createElement("p");
    tvShowLength.classList.add("tv-show-length");
    tvShowLength.textContent = `${tvShow.length}`;
    tvShowInfo.appendChild(tvShowLength);

    const tvShowDescription = document.createElement("p");
    tvShowDescription.classList.add("tv-show-description");
    tvShowDescription.textContent = tvShow.description;
    tvShowInfo.appendChild(tvShowDescription);

    const watchTrailerButton = document.createElement("button");
    watchTrailerButton.classList.add("watch-trailer");
    watchTrailerButton.textContent = "Watch Trailer";
    watchTrailerButton.addEventListener("click", () => {
        window.open(tvShow.trailerUrl);
    });
    tvShowInfo.appendChild(watchTrailerButton);

    tvShowCard.appendChild(tvShowInfo);

    tvShowContainer.appendChild(tvShowCard);

});
