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

const sliderContainer = document.querySelector('.slider');
const imagesCount = 4; // Zmień na liczbę dostępnych obrazów
let currentIndex = 1;

function createSlider() {
    for (let i = -1; i <= 1; i++) {
        let img = document.createElement('img');
        img.src = `assets/slider${getValidIndex(currentIndex + i)}.jpg`;
        img.classList.add('slide');
        if (i === 0) img.classList.add('active');
        sliderContainer.appendChild(img);
    }
}

function getValidIndex(index) {
    if (index < 1) return imagesCount;
    if (index > imagesCount) return 1;
    return index;
}

function updateSlider(direction) {
    currentIndex = getValidIndex(currentIndex + direction);
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.src = `assets/slider${getValidIndex(currentIndex + i - 1)}.jpg`;
        slide.className = 'slide';
        if (i === 1) slide.classList.add('active');
    });
}

document.querySelector('.prev').addEventListener('click', () => updateSlider(-1));
document.querySelector('.next').addEventListener('click', () => updateSlider(1));

createSlider();
