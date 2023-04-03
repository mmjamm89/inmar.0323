let carousel = document.querySelector('.carousel-home-container');

let images = carousel.querySelectorAll("img");

let index = 1;

setInterval(() => {
    let percentage = index * -100;
    carousel.style.transform = "translateX(" + percentage + "%)"
    index++;
    if (index > (images.length - 1)) {
        index = 0;
    }
}, 1000);