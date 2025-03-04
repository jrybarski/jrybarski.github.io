function scrollToSection(targetSelector) {
    const targetElement = document.querySelector(targetSelector);
    
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
}

// Dodaj event listener do przycisków
document.getElementById("offer")?.addEventListener("click", () => scrollToSection(".about"));
document.getElementById("offer--footer")?.addEventListener("click", () => scrollToSection(".about"));

document.getElementById("services")?.addEventListener("click", () => scrollToSection(".services"));
document.getElementById("services--footer")?.addEventListener("click", () => scrollToSection(".services"));

document.getElementById("about")?.addEventListener("click", () => scrollToSection("#article"));
document.getElementById("about--footer")?.addEventListener("click", () => scrollToSection("#article"));

document.getElementById("location")?.addEventListener("click", () => scrollToSection(".findusonmap"));
document.getElementById("location--footer")?.addEventListener("click", () => scrollToSection(".findusonmap"));

document.getElementById("contact")?.addEventListener("click", () => scrollToSection(".footer"));
document.getElementById("contact--footer")?.addEventListener("click", () => scrollToSection(".footer"));

document.getElementById("main")?.addEventListener("click", () => scrollToSection(".navbar"));
document.getElementById("main--footer")?.addEventListener("click", () => scrollToSection(".navbar"));

// Obsługa specjalnego przypadku dla .background-button
document.querySelector(".background-button")?.addEventListener("click", () => scrollToSection(".findusonmap"));
