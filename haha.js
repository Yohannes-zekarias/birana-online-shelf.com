searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}
window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

var swiper = new Swiper(".book-slider", {
       loop:true,
       centeredSlides:true,
       autolpay: {
        delay: 9500,
        disableOnInteraction: false,
       },
       breakpoints: {
        0: {
            slidesPerview: 1,
        },
        768: {
            slidesPerview: 2,
        },
        1024: {
           slidesPerview: 3,
     },
    },
 });

 var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autolpay: {
     delay: 9500,
     disableOnInteraction: false,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
     0: {
         slidesPerview: 1,
     },
     450: {
        slidesPerview: 2,
     },
     768: {
         slidesPerview: 3,
     },
     1024: {
        slidesPerview: 4,
     },
        
 },
});

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autolpay: {
     delay: 9500,
     disableOnInteraction: false,
    },
    
    breakpoints: {
     0: {
         slidesPerview: 1,
     },
     768: {
         slidesPerview: 2,
     },
     1024: {
        slidesPerview: 3,
     },
        
 },
});
var swiper = new Swiper(".feedback-slider", {
    spaceBetween: 10,
    grabCurser: true,
    loop:true,
    centeredSlides:true,
    autolpay: {
     delay: 9500,
     disableOnInteraction: false,
    },
    
    breakpoints: {
     0: {
         slidesPerview: 1,
     },
     768: {
         slidesPerview: 2,
     },
     1024: {
        slidesPerview: 3,
     },
        
 },
});