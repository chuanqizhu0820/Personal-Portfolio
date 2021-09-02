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
    name: "Multi-Post Stories",
    image: "img/work_img/Portfolio.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ["CSS", "HTML", "Bootstrap", "Ruby"],
    live: "https://chuanqizhu0820.github.io/My-Portfolio/",
    source: "https://github.com/chuanqizhu0820/My-Portfolio"
  },
  work2: {
    name: "Multi-Post Stories",
    image: "img/work_img/Portfolio1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ["CSS", "HTML", "Bootstrap", "Ruby"],
    live: "https://chuanqizhu0820.github.io/My-Portfolio/",
    source: "https://github.com/chuanqizhu0820/My-Portfolio"
  },
  work3: {
    name: "Multi-Post Stories",
    image: "img/work_img/Portfolio2.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ["CSS", "HTML", "Bootstrap", "Ruby"],
    live: "https://chuanqizhu0820.github.io/My-Portfolio/",
    source: "https://github.com/chuanqizhu0820/My-Portfolio"
  },
  work4: {
    name: "Multi-Post Stories",
    image: "img/work_img/Portfolio3.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ["CSS", "HTML", "Bootstrap", "Ruby"],
    live: "https://chuanqizhu0820.github.io/My-Portfolio/",
    source: "https://github.com/chuanqizhu0820/My-Portfolio"
  }
}

function openWindow() {
  const popupwindow = document.querySelector("#popup-window");
  let workid = this.id;

  const protitle = document.querySelector("#windowtitle")
  protitle.textContent = projectInfo[workid].name;

  const proimg = document.querySelector("#windowimg")
  proimg.src = projectInfo[workid].image;

  const protech = document.querySelectorAll("#windowtech li")
  protech.forEach((item, i) => {
    item.textContent = projectInfo[workid].tech[i];
  })

  const prolive = document.querySelector("#btnlive a")
  prolive.href = projectInfo[workid].live;

  console.log(prolive.href);

  const prosource = document.querySelector("#btnsource a")
  prosource.href = projectInfo[workid].source;

  popupwindow.style.display = 'block';
}

const btnWork1 = document.querySelector("#work1");
const btnWork2 = document.querySelector("#work2");
const btnWork3 = document.querySelector("#work3");
const btnWork4 = document.querySelector("#work4");
btnWork1.addEventListener("click", openWindow);
btnWork2.addEventListener("click", openWindow);
btnWork3.addEventListener("click", openWindow);
btnWork4.addEventListener("click", openWindow);

function closeWindow() {
  const popupwindow = document.querySelector("#popup-window");
  popupwindow.style.display = 'none';
}

const btnclose = document.querySelector("#closewindow");
btnclose.addEventListener("click", closeWindow);

