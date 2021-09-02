const hambbutton = document.querySelector('.menu-icon');
const main = document.querySelector('.container');
const menu = document.querySelector('.mobile-menu');

function openMenu() {
  main.style.display = 'none';
  menu.style.display = 'block';
}

hambbutton.addEventListener('click', openMenu);

const closebutton = document.querySelector('#cross-icon');

function closeMenu() {
  main.style.display = 'flex';
  menu.style.display = 'none';
}

closebutton.addEventListener('click', closeMenu);

const listItem = document.querySelectorAll('.menu-btn');
listItem.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

let projectInfo = {
work1: {
name: “Multi-Post Stories”,
image: “img/work_img/Portfolio.png”,
description: “A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.“,
tech: [“CSS”, “HTML”, “Bootstrap”, “Ruby”],
live: “https://chuanqizhu0820.github.io/My-Portfolio/”,
source: “https://github.com/chuanqizhu0820/My-Portfolio”
},
work2: {
name: “Multi-Post Stories”,
image: “img/work_img/Portfolio1.png”,
description: “A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.“,
tech: [“CSS”, “HTML”, “Bootstrap”, “Ruby”],
live: “https://chuanqizhu0820.github.io/My-Portfolio/”,
source: “https://github.com/chuanqizhu0820/My-Portfolio”
},
work3: {
name: “Multi-Post Stories”,
image: “img/work_img/Portfolio2.png”,
description: “A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.“,
tech: [“CSS”, “HTML”, “Bootstrap”, “Ruby”],
live: “https://chuanqizhu0820.github.io/My-Portfolio/”,
source: “https://github.com/chuanqizhu0820/My-Portfolio”
},
work4: {
name: “Multi-Post Stories”,
image: “img/work_img/Portfolio3.png”,
description: “A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.“,
tech: [“CSS”, “HTML”, “Bootstrap”, “Ruby”],
live: “https://chuanqizhu0820.github.io/My-Portfolio/”,
source: “https://github.com/chuanqizhu0820/My-Portfolio”
}
}