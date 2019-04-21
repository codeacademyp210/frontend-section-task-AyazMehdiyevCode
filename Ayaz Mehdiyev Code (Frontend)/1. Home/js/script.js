const slideItems = document.querySelector(".slideItems");
const slideDivs = document.querySelectorAll(".slideItems>div");
const prevbtn = document.querySelector(".prevbtn");
const nextbtn = document.querySelector(".nextbtn");
let counter = 1;
const size = slideDivs[0].clientWidth;


slideItems.style.transform = 'translateX('+ (-size * counter ) + 'px)';

nextbtn.addEventListener('click',function(){
    if(counter >= slideDivs.length-1){return}
    slideItems.style.transition = "transform 0.4s ease-out";
    counter++;
    slideItems.style.transform = 'translateX('+ (-size * counter ) + 'px)';
});
prevbtn.addEventListener('click',function(){
    if(counter <= 0){return}
    slideItems.style.transition = "transform 0.4s ease-out";
    counter--;
    slideItems.style.transform = 'translateX('+ (-size * counter ) + 'px)';
});

slideItems.addEventListener("transitionend",function(){
    if(slideDivs[counter].id === "lastSlideClone"){
    slideItems.style.transition = "none";
    counter = slideDivs.length-2;
    slideItems.style.transform = 'translateX('+ (-size * counter ) + 'px)';
    }
    if(slideDivs[counter].id === "firstSlideClone"){
    slideItems.style.transition = "none";
    counter = slideDivs.length - counter;
    slideItems.style.transform = 'translateX('+ (-size * counter ) + 'px)';
    }
})