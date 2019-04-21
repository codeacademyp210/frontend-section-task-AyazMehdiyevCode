'use strict'


/*barIcon*/

let barIcon = document.querySelector(".barIcon>i");
let listMenu = document.querySelector('.listMenu');
let listMenuClass = listMenu.classList ;
let listMenuParentClass = listMenu.parentElement.classList;

function closeMenu(){
    listMenuClass.add("closeMenu");
};

barIcon.addEventListener("click",funbarIcon);

function funbarIcon(){  
    if(!listMenuParentClass.contains("d-none")){
    closeMenu();
    barIcon.removeEventListener("click",funbarIcon);
    setTimeout(function(){
     listMenuParentClass.add("d-none");
     listMenuClass.remove("closeMenu");
     barIcon.addEventListener("click",funbarIcon);
    },500) 
    
    }else {

    listMenuParentClass.remove("d-none");
    barIcon.removeEventListener("click",funbarIcon);
    setTimeout(function(){
        barIcon.addEventListener("click",funbarIcon);
       },500) 
 }};

/*endBarIcon*/
/*positionStiky*/

let navbar = document.querySelector(".navbar")
let navbarTop = navbar.offsetTop
function setStiky(){
    if(window.pageYOffset >= navbarTop){
        pageTopShow ();
        navbar.classList.add("sctiky")
    }   else{
        pageTopHide();
        navbar.classList.remove("sctiky")
    }
};  

/*endPositionStiky*/
/* pageTop icon */

let pageTop = document.querySelector(".pageTop")
let pageTopClass = pageTop.classList
let iconOpacity = 0
function pageTopShow (){
    
        pageTopClass.remove("d-none");
        pageTop.style.opacity = iconOpacity;
       let show =  setInterval(function(){if(iconOpacity >= 0.99){
        clearInterval(show);
    }else{
        iconOpacity += 0.05;
        pageTop.style.opacity = iconOpacity;
      
    }},50);

}

function pageTopHide(){

    let hide = setInterval(function(){
        if(iconOpacity<=0){
            clearInterval(hide)
            pageTopClass.add    ("d-none");
        }else{
            iconOpacity -= 0.05;
            pageTop.style.opacity = iconOpacity;
        }
    },50)

}
