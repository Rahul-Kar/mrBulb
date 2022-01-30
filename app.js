const nav = document.querySelector('.navbar')

window.addEventListener("scroll", () => {
    if(window.scrollY > 150) {
nav.classList.add('navbar_dark')
    }
    if(window.scrollY < 150) {
nav.classList.remove('navbar_dark')
    }
})