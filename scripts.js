document.addEventListener("DOMContentLoaded", () => {
    const gameLinks = document.querySelectorAll(".listing .column a");

    gameLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const gameUrl = link.getAttribute("href");
            window.open(gameUrl, "_blank");
        });
    });
});
