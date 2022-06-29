// MENU SHOW & HIDE
const navMenu = document.getElementById('nav_menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW MENU
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDE MENU
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

//REMOVE MENU
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Toggle Dark
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");
    }