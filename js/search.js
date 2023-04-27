const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

async function getSpecificContent() {
    try {
        const response = await fetch(`http://localhost:3000/getSpecificcontent?name=${searchInput.value}`);
        const data = await response.json();

        contentContainer.innerHTML = "";



        if (data.length === 0) {
            const noResultsMessage = document.createElement("p");
            noResultsMessage.textContent = "No results found";
            contentContainer.appendChild(noResultsMessage);
            return;
        }

        data.forEach((item) => {
            const contentCard = document.createElement("div");
            contentCard.classList.add("content-card");

            const contentPoster = document.createElement("img");
            contentPoster.src = item.image;
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
        });
    } catch (error) {
        console.error(error);
    }
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    getSpecificContent();
});
