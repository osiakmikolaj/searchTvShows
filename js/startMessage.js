function message() {
    if (searchInput.value != "") {
        document
            .querySelector(".container_start-message")
            .classList.add("hidden");
        document
            .querySelector(".container_showElements")
            .classList.remove("hidden");
    } else if (searchInput.value == "") {
        document
            .querySelector(".container_start-message")
            .classList.remove("hidden");
        document
            .querySelector(".container_showElements")
            .classList.add("hidden");
    }
}
