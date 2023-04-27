
const tvshowContainer = document.querySelector("#tv-show-container");
let tvshows = [];

async function getTVShows() {
    try {
        const response = await fetch("http://localhost:3000/getTVShows");
        const data = await response.json();

        tvshows = data;
        tvshows.forEach((tvshow) => {
            const tvshowCard = document.createElement("div");
            tvshowCard.classList.add("tv-show-card");

            const tvshowPoster = document.createElement("img");
            tvshowPoster.src = tvshow.image;
            //tvshowPoster.alt = `${tvshow.image} Poster`;
            tvshowCard.appendChild(tvshowPoster);

            const tvshowInfo = document.createElement("div");
            tvshowInfo.classList.add("tv-show-info");

            const tvshowTitle = document.createElement("h3");
            tvshowTitle.classList.add("tv-show-title");
            tvshowTitle.textContent = tvshow.name;
            tvshowInfo.appendChild(tvshowTitle);

            const genreType = document.createElement("p");
            genreType.classList.add("tv-show-genre");
            genreType.textContent = `Genre: ${tvshow.genre}`;
            tvshowInfo.appendChild(genreType);

            const tvshowSeasons = document.createElement("p");
            tvshowSeasons.classList.add("tv-show-length");
            tvshowSeasons.textContent = `Length ${tvshow.length}`;
            tvshowInfo.appendChild(tvshowSeasons);

            const tvshowDescription = document.createElement("p");
            tvshowDescription.classList.add("tv-show-description");
            tvshowDescription.textContent = tvshow.description;
            tvshowInfo.appendChild(tvshowDescription);

            tvshowCard.appendChild(tvshowInfo);

            tvshowContainer.appendChild(tvshowCard);
        });
    } catch (error) {
        console.error(error);
    }
}

getTVShows();
