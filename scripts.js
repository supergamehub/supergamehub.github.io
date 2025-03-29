document.addEventListener("DOMContentLoaded", () => {
    const gameLinks = document.querySelectorAll(".listing .column a");
    const gameFrame = document.getElementById("game-frame");

    gameLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const gameUrl = link.getAttribute("data-url");
            loadGame(gameUrl);
        });
    });

    function loadGame(url) {
        gameFrame.src = url;
        gameFrame.style.display = "block";
    }
});
