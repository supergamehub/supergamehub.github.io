document.addEventListener("DOMContentLoaded", () => {
    const gameLinks = document.querySelectorAll(".listing .column a");
    const logoLink = document.querySelector(".logo");

    gameLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const gameUrl = link.getAttribute("href");
            window.open(gameUrl, "_blank");
        });
    });

    // Prevent default behavior for the logo link
    logoLink.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Logo clicked, no action taken.");
    });
});
