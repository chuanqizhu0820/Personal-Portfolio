
const icon = document.querySelector(".menu-icon");

function menuList() {

    const list = document.querySelector(".menu-list");
    const logo = document.querySelector(".logo")

    icon.style.display = "none";
    logo.style.display = "none";
    list.style.display = "block";
}

icon.addEventListener('click', menuList);