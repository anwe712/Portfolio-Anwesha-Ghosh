document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        if (currentIndex < carousel.children.length - 3) {
            currentIndex++;
            carousel.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            carousel.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
        }
    });
});



