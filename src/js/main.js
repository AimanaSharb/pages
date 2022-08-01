// let intro = document.querySelector('.intro');
// let logo = document.querySelector('.logo-header');
// let logoSpan = document.querySelectorAll('.logo');
//
//
//
// window.addEventListener('DOMContentLoaded', ()=>{
//     setTimeout(()=>{
//
//         logoSpan.forEach((span, idx)=>{
//             setTimeout(()=>{
//                 span.classList.add('active');
//
//             }, (idx+1) * 400)
//         });
//         setTimeout(()=> {
//             logoSpan.forEach(()=> {
//
//
//                 setTimeout(()=>{
//                     span.classList.remove('active');
//                     span.classList.add('fade')
//                 }, (idx + 1)*50)
//                 })
//
//             }, 2000);
//         setTimeout(()=>{
//             intro.style.top = '-100vh';
//         }, 2300)
//         })
//     })




let burger = document.querySelector('.header__burger')
let headerRight = document.querySelector('.header__right')



burger.addEventListener('click', function () {
    burger.classList.toggle('header__burger_active')
    headerRight.classList.toggle('header__right_active')

})

// const hamburger = document.querySelector(".hamburger")
// const navMenu = document.querySelector(".header__list")
//
//
// hamburger.addEventListener("click", ()=>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active")
// })