const modeBtn = document.querySelector("#search-bar_mode-button");
const modeBtnIcon = document.querySelector(".material-symbols-outlined");

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)")) {
    document.body.classList.toggle("dark-mode");
    modeBtnIcon.innerHTML = "light_mode";
    modeBtnIcon.style.color = "yellow";
    modeBtn.style.backgroundColor = "lightskyblue";
}

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (modeBtnIcon.innerHTML != "light_mode") {
        modeBtnIcon.innerHTML = "light_mode";
        modeBtnIcon.style.color = "yellow";
        modeBtn.style.backgroundColor = "lightskyblue";
    } else {
        modeBtnIcon.innerHTML = "dark_mode";
        modeBtnIcon.style.color = "#313131";
        modeBtn.style.backgroundColor = "lightgray";
    }
});
