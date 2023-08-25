
const iconesFavoritar = document.querySelectorAll(".icone__favoritar");

iconesFavoritar.forEach((iconeFavoritar) => {
    iconeFavoritar.addEventListener("click", function () {
        const iconeFavoritado = this.nextElementSibling;
        if (this.style.display !== "none") {
            iconeFavoritado.style.display = "block";
            this.style.display = "none";
            this.classList.toggle("icone__favoritar");
            this.classList.toggle("icone__favoritado");
        } else {
            iconeFavoritado.style.display = "none";
            this.style.display = "block";

        }
    });
});

