const inputBtn = document.querySelector("#input_btn");
const searchInput = document.querySelector("#search-bar_input");
const showContainer = document.querySelector(".container_showElements");

let showArr = [];

const addShowToContainer = () => {
    for (e in showArr) {
        const showCard = document.createElement("div");
        showCard.classList.add("show-card");

        const showCardImg = document.createElement("img");
        showCardImg.classList.add("show-card_img");
        showCardImg.src = showArr[e].image.original;

        showCard.append(showCardImg);
        showContainer.append(showCard);
    }
};

const pushToShowArr = (data) => {
    for (e in data) {
        if (data[e].show.image != null) {
            showArr.push(data[e].show);
        }
    }
};

const clearShowContainer = () => {
    showContainer.innerHTML = "";
};

const clearShowArr = () => {
    showArr = [];
};

const search = async (q) => {
    try {
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`);
        const data = await res.json();
        clearShowArr();
        clearShowContainer();
        pushToShowArr(data);
        setTimeout(() => {
            addShowToContainer();
            clearShowArr();
        }, 500);
    } catch (error) {
        console.log(error);
    }
};

searchInput.addEventListener("input", () => {
    message();
    search(searchInput.value);
});
