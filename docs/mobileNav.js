const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');



hamburger.addEventListener('click', () => {
    toggleNav();

});

function toggleNav() {
    navMenu.classList.toggle('show');
    hamburger.classList.toggle('change');
}