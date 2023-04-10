let btn = document.querySelector(".myBtn")
let menu = document.querySelector(".navbar-menu")
let navbar = document.querySelector(".navbar")
let opened = false

function toggle() {
    console.log("toggle")
    if (!opened) {
        menu.classList.add('open')
        btn.classList.add('anime')
        navbar.classList.add('fixed')
        opened = true
    } else {
        menu.classList.remove('open')
        btn.classList.remove('anime')
        navbar.classList.remove('fixed')
        opened = false
    }
}


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)