document.addEventListener("DOMContentLoaded", function() {
    const introText = document.getElementById("intro-text");
    const startButton = document.getElementById("start-button");
    const navBarLinks = document.querySelectorAll(".nav-bar a");
    const sections = document.querySelectorAll(".section-content");
    const exitButton = document.getElementById("exit-button");

    setTimeout(() => introText.classList.add("visible"), 500);
    setTimeout(() => startButton.classList.add("visible"), 1500);

    startButton.addEventListener("click", function() {
        introText.classList.remove("visible");
        startButton.style.display = "none";
        navBarLinks.forEach(link => link.classList.add("visible"));
        exitButton.classList.add("visible");
    });

    navBarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            const targetSectionId = link.getAttribute("href").substring(1); // Récupère l'ID de la section
            sections.forEach(section => {
                section.style.display = "none";
                section.classList.remove("visible");
            });
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.style.display = "block";
                targetSection.classList.add("visible");
            }
        });
    });

    exitButton.addEventListener("click", function() {
        sections.forEach(section => {
            section.style.display = "none";
            section.classList.remove("visible");
        });
        introText.classList.add("visible");
        startButton.style.display = "block";
        exitButton.classList.remove("visible");
        navBarLinks.forEach(link => link.classList.remove("visible"));
    });
});
