
const hamb = document.querySelector("#hamb-icon");
const cross = document.querySelector("#cross-icon");
const menu = document.querySelector("#menu-list");
const main = document.querySelector('main');
const logo = document.querySelector(".logo");

function menuList() {
    hamb.style.display = "none";
    cross.style.display = "block";
    menu.style.display = "block";

    main.style.display = "none";
    logo.style.display = "none";
}

const hambbutton = document.querySelector("#hamb-icon");
hambbutton.addEventListener('click', menuList);

function closeMenu() {
    hamb.style.display = "block";
    cross.style.display = "none";
    menu.style.display = "none";
    main.style.display = "block";
    logo.style.display = "block";
}

const crossbutton = document.querySelector("#cross-icon");
crossbutton.addEventListener('click', closeMenu);

