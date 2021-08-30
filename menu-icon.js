
const icon = document.querySelector(".menu-icon");
const header = document.querySelector(".toolbar");

function expand() {
    const list = document.querySelector(".menu-list");

    list.style.heigth = "800px";

    list.style.display = "flex";
    list.style.flexDirection = "column";

    let li1 = document.createElement('li');
    li1.id = 'portfolio';
    li1.textContent = 'Portfolio';
    li1.style.fontSize = "24px";
    li1.style.paddingTop = "50px";
    list.appendChild(li1);

    let li2 = document.createElement('li');
    li2.id = 'about';
    li2.textContent = 'About';
    li2.style.fontSize = "24px";
    li2.style.paddingTop = "50px";
    list.appendChild(li2);

    let li3 = document.createElement('li');
    li3.id = 'contact';
    li3.textContent = 'Contact';
    li3.style.paddingTop = "50px";
    li3.style.fontSize = "24px";
    list.appendChild(li3);

    const menuicon = document.querySelector("#menu-icon");
    menuicon.remove();

    const crossIcon = document.querySelector('#cross-icon');
    let listCross = document.createElement('li');
    let anchorCross = document.createElement('a');
    let imgCross = document.createElement("img");
    imgCross.src = "img/mobile/cross-icon.png";
    anchorCross.appendChild(imgCross);
    listCross.appendChild(anchorCross);

    crossIcon.appendChild(listCross);

    header.style.height = "800px";



}
icon.addEventListener('click', expand);