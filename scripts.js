document.addEventListener("DOMContentLoaded", () => {
    const gameLinks = document.querySelectorAll(".listing .column a");
    const gameFrame = document.getElementById("game-frame");
    const contentArea = document.querySelector(".g-content");

    gameLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const gameUrl = link.getAttribute("data-url");
            loadGame(gameUrl);
        });
    });

    function loadGame(url) {
        // Clear the content area and show the iframe
        contentArea.innerHTML = '';
        gameFrame.src = url;
        gameFrame.style.display = "block";
        contentArea.appendChild(gameFrame);
    }
});
