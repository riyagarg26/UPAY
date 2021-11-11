const menu = document.querySelector('#mobile-menu')
const menuLinks= document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const btn1 = document.querySelector('.button1')
const btn2 = document.querySelector('.button2')
const slide1 = document.querySelector('#first')
const slide2 =document.querySelector('#second')


btn2.addEventListener('click',() => slide1.style.border = ' 2px solid #DDDDDD')
 btn2.addEventListener('click',() => slide2.style.border = ' 2px solid  #F53838')

btn1.addEventListener('click',() => slide1.style.border = ' 2px solid  #F53838')

btn1.addEventListener('click',() => slide2.style.border = ' 2px solid #DDDDDD')

