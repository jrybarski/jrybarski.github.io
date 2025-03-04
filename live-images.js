document.addEventListener("DOMContentLoaded", function () {
    // Obserwacja elementów, które mają pojawiać się przy przewijaniu
    const elements = document.querySelectorAll(".image-live, .background, .log");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Aktywujemy animację
                observer.unobserve(entry.target); // Przestajemy obserwować po pojawieniu się
            }
        });
    }, { threshold: 0.3 }); // 30% widoczności aktywuje animację

    elements.forEach(element => observer.observe(element));

    // Efekt pojawiania się logo na środku i jego zniknięcia
    const logoContainer = document.querySelector(".logo-container");
    if (logoContainer) {
        setTimeout(() => {
            logoContainer.classList.add("hide");
        }, 500); // Logo znika po 2 sekundach
    }
});
