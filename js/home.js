const contentContainer = document.querySelector("#content-container");
let content = [];

async function getAllContent() {
    try {
        const response = await fetch("http://localhost:3000/getAllContent");
        const data = await response.json();

        content = data.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        content.forEach((item) => {
            const contentCard = document.createElement("div");
            contentCard.classList.add("content-card");

            const contentPoster = document.createElement("img");
            contentPoster.src = item.image;
            //contentPoster.alt = `${item.image} Poster`;
            contentCard.appendChild(contentPoster);

            const contentInfo = document.createElement("div");
            contentInfo.classList.add("content-info");

            const contentTitle = document.createElement("h3");
            contentTitle.classList.add("content-title");
            contentTitle.textContent = item.name;
            contentInfo.appendChild(contentTitle);

            const genreType = document.createElement("p");
            genreType.classList.add("content-genre");
            genreType.textContent = `Genre: ${item.genre}`;
            contentInfo.appendChild(genreType);

            const contentLength = document.createElement("p");
            contentLength.classList.add("content-length");
            contentLength.textContent = item.length;
            contentInfo.appendChild(contentLength);



            const contentDescription = document.createElement("p");
            contentDescription.classList.add("content-description");
            contentDescription.textContent = item.description;
            contentInfo.appendChild(contentDescription);

            contentCard.appendChild(contentInfo);

            contentContainer.appendChild(contentCard);

            //favorite Button
            const favoriteButton = document.createElement("button");
            favoriteButton.classList.add("favorite-button");
            favoriteButton.innerHTML = '<i class="fas fa-heart"></i> Add to Favorites';

            // Check if the movie is already in favorites
            const isInFavorites = () => {
                const contID = item.content_id;
                return favorites.includes(contID);
            };

            // Toggle the button text based on whether the movie is in favorites
            const toggleButtonText = () => {
                if (isInFavorites()) {
                    favoriteButton.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
                    const userID = isLoggedin // KESKEN itemillä ei ole user_id. user_id tarvitaan.
                    const contentID = item.content_id;
                    const userRating = 1;
                    module.exports = userID;
                    module.exports = contentID;
                    module.exports = userRating;
                    fetch("http://localhost:3000/rateContent");
                } else {
                    favoriteButton.innerHTML = '<i class="fas fa-heart"></i> Add to Favorites';
                    fetch("http://localhost:3000/unrateContent");
                }
            };

            toggleButtonText(); // Set the initial button text based on whether the movie is in favorites
        });
    } catch (error) {
        console.error(error);
    }
}

getAllContent();
