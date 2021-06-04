var burgerMenu = document.querySelector('.burger_menu');
var resp = document.getElementById('resp');
var inner = document.querySelector('.hamburger_inner');
var overlay = document.querySelector('.menu_overlay')

function toggleBurgerMenu(burger, resp, overlay, inner) {
    burger.classList.toggle('active');
    resp.classList.toggle('active');
    overlay.classList.toggle('active');
    inner.classList.toggle('active');
}

burgerMenu.onclick = function () {
    toggleBurgerMenu(burgerMenu, resp, overlay, inner);
}

overlay.onclick = function () {
    toggleBurgerMenu(burgerMenu, resp, overlay, inner);
}