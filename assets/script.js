const menuToggle = document.querySelector('.menu-toggle input');
const listMenu = document.querySelector('.list-menu');

// Munculkan sidebar
menuToggle.addEventListener('click',function(){
    listMenu.classList.toggle('slide');
});