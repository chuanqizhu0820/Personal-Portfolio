const hambbutton = document.querySelector(".menu-icon");
const main = document.querySelector(".container");
const menu = document.querySelector(".mobile-menu");

function openMenu() {
    main.style.display = "none";
    menu.style.display = "block";
}

hambbutton.addEventListener('click', openMenu);

const closebutton = document.querySelector("#cross-icon");

function closeMenu() {
    main.style.display = "flex";
    menu.style.display = "none";
}

closebutton.addEventListener('click', closeMenu);