document.addEventListener("DOMContentLoaded", () => {
    const gameLinks = document.querySelectorAll(".listing .column a");
    const gameFrame = document.getElementById("game-frame");
    const categoryLinks = document.querySelectorAll(".side-menu .category-item a");
    const contentArea = document.querySelector(".g-content");

    gameLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const gameUrl = link.getAttribute("data-url");
            loadGame(gameUrl);
        });
    });

    categoryLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const category = link.getAttribute("data-category");
            loadCategory(category);
        });
    });

    function loadGame(url) {
        gameFrame.src = url;
        gameFrame.style.display = "block";
    }

    function loadCategory(category) {
        contentArea.innerHTML = `<h3>Cargando ${category}...</h3>`;
        setTimeout(() => {
            contentArea.innerHTML = `<h3>Sección de ${category}</h3><p>Aquí se mostrarán los juegos de la categoría ${category}.</p>`;
        }, 500); // Simula un retraso de carga
    }
});
