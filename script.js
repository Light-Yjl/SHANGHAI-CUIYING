let index = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");



function showSlide(i){

    slides.forEach(function(slide){

        slide.classList.remove("active");

    });

    dots.forEach(function(dot){

        dot.classList.remove("active");

    });

    slides[i].classList.add("active");

    dots[i].classList.add("active");


}

function nextSlide(){

    index++;
    if(index >= slides.length){

        index = 0;

    }


    showSlide(index);

}

function prevSlide(){
    index--;

    if(index < 0){

        index = slides.length-1;

    }

    showSlide(index);

}


document.querySelector(".next")
.onclick = nextSlide;

document.querySelector(".prev")
.onclick = prevSlide;


// 自动播放

setInterval(nextSlide,3000);
