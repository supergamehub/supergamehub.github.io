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

    const cookieDisclaimer = document.querySelector(".cookie-disclaimer");
    const acceptCookiesButton = document.querySelector(".accept-cookies");

    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener("click", () => {
            cookieDisclaimer.style.display = "none";
        });
    }

    const games = [
        { name: "Mystical Forest", category: "estrategia", url: "https://cdn.htmlgames.com/MysticalForest/", img: "https://www.htmlgames.com/uploaded/game/thumb200/mysticalforest200.webp" },
        { name: "Sudoku Classic", category: "rompecabezas", url: "https://cdn.htmlgames.com/SudokuClassic/", img: "https://www.htmlgames.com/uploaded/game/thumb200/sudokuclassic200.webp" },
        { name: "Candy Mahjong", category: "rompecabezas", url: "https://cdn.htmlgames.com/CandyMahjong/", img: "https://www.htmlgames.com/uploaded/game/thumb200/candymahjong200.webp" },
        { name: "The Watermelon Game", category: "estrategia", url: "https://cdn.htmlgames.com/TheWatermelonGame/", img: "https://www.htmlgames.com/uploaded/game/thumb200/thewatermelongame200.webp" },
        { name: "Jungle Sniper", category: "accion", url: "https://cdn.htmlgames.com/JungleSniper/", img: "https://www.htmlgames.com/uploaded/game/thumb200/junglesniper200.webp" }
    ];

    function loadGame(url) {
        contentArea.innerHTML = `<iframe src="${url}" frameborder="0" style="width: 100%; height: 80vh;"></iframe>`;
    }

    function loadCategory(category) {
        const filteredGames = games.filter(game => game.category === category);
        if (filteredGames.length > 0) {
            contentArea.innerHTML = `<h3>Juegos de ${category.charAt(0).toUpperCase() + category.slice(1)}</h3>`;
            const gameList = document.createElement("div");
            gameList.classList.add("listing");
            filteredGames.forEach(game => {
                const gameColumn = document.createElement("div");
                gameColumn.classList.add("column");
                gameColumn.innerHTML = `
                    <a href="${game.url}" data-url="${game.url}">
                        <img src="${game.img}" alt="${game.name}">
                        <p>${game.name}</p>
                    </a>
                `;
                gameList.appendChild(gameColumn);
            });
            contentArea.appendChild(gameList);
        } else {
            contentArea.innerHTML = `<h3>No hay juegos disponibles en la categoría ${category}.</h3>`;
        }
    }
});
