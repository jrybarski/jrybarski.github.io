document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".image-live, .background, .log"); // Dodano .log

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Aktywujemy animację
                observer.unobserve(entry.target); // Przestajemy obserwować po pojawieniu się
            }
        });
    }, { threshold: 0.3 }); // 30% widoczności aktywuje animację

    elements.forEach(element => observer.observe(element));
});
