let slider = document.querySelector(".slider-kaiken-img-container");

let images = slider.querySelectorAll("img");

let index = 1;

setInterval(() => {
    let percentage = index * -100;
    slider.style.transform = "translateX(" + percentage + "%)"    
    index++;
    if(index > (images.length - 1)) {
        index = 0;
    }
}, 3000);


