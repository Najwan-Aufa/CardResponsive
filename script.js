const cardWrapper = document.getElementById('cardWrapper');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

// Fungsi untuk scroll ke kiri
scrollLeft.addEventListener('click', () => {
    cardWrapper.scrollBy({
        left: -400,
        behavior: 'smooth'
    });
});

// Fungsi untuk scroll ke kanan
scrollRight.addEventListener('click', () => {
    cardWrapper.scrollBy({
        left: 400,
        behavior: 'smooth'
    });
});
