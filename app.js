const slides = document.querySelectorAll(".slide");

const slider = (e) => {
    if (e.classList.contains('active')) {
        e.classList.remove('active');
    } else {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
        e.classList.add('active');
    }
}