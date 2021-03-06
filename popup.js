const projectInfo = [
  {
    id: 1,
    name: 'Multi-Post Stories',
    image: 'img/work_img/Portfolio.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://chuanqizhu0820.github.io/My-Portfolio/',
    source: 'https://github.com/chuanqizhu0820/My-Portfolio',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    image: 'img/work_img/Portfolio1.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://chuanqizhu0820.github.io/My-Portfolio/',
    source: 'https://github.com/chuanqizhu0820/My-Portfolio',
  },
  {
    id: 3,
    name: 'Multi-Post Stories',
    image: 'img/work_img/Portfolio2.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://chuanqizhu0820.github.io/My-Portfolio/',
    source: 'https://github.com/chuanqizhu0820/My-Portfolio',
  },
  {
    id: 4,
    name: 'Multi-Post Stories',
    image: 'img/work_img/Portfolio3.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://chuanqizhu0820.github.io/My-Portfolio/',
    source: 'https://github.com/chuanqizhu0820/My-Portfolio',
  },
];

const projectObj = {
  work1: {
    id: 1,
    name: 'Multi-Post Stories',
    image: 'img/work_img/Portfolio.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://chuanqizhu0820.github.io/My-Portfolio/',
    source: 'https://github.com/chuanqizhu0820/My-Portfolio',
  },
  work2: {
    id: 2,
    name: 'Multi-Post Stories',
    image: 'img/work_img/Portfolio1.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://chuanqizhu0820.github.io/My-Portfolio/',
    source: 'https://github.com/chuanqizhu0820/My-Portfolio',
  },
  work3: {
    id: 3,
    name: 'Multi-Post Stories',
    image: 'img/work_img/Portfolio2.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://chuanqizhu0820.github.io/My-Portfolio/',
    source: 'https://github.com/chuanqizhu0820/My-Portfolio',
  },
  work4: {
    id: 4,
    name: 'Multi-Post Stories',
    image: 'img/work_img/Portfolio3.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    live: 'https://chuanqizhu0820.github.io/My-Portfolio/',
    source: 'https://github.com/chuanqizhu0820/My-Portfolio',
  },
};

const workcontainer = document.querySelector('.work-container');

let projhtml = '';

projectInfo.forEach((item) => {
  projhtml += `<div class="work${item.id} flex" id="work${item.id}">
    <img src=${item.image} alt="work${item.id} image" id="work${item.id}img" />
    <div id="work${item.id}text">
      <h3 class="work-name">${item.name}</h3>
      <p class="work-description">${item.description}</p>
      <ul class="work-skills grid-container">
        <li class="gird">${item.tech[0]}</li>
        <li class="gird">${item.tech[1]}</li>
        <li class="gird">${item.tech[2]}</li>
        <li class="grid0">${item.tech[3]}</li>
      </ul>
      <button class="btn-window" id="work${item.id}">${'See Project'}</button>
    </div>
 </div>`;
});

workcontainer.innerHTML = projhtml;

const pageheader = document.querySelector('header');
const pagework = document.querySelector('.work-section');
const pagefooter = document.querySelector('footer');

let workopen = '#';

function openWindow() {
  const popupwindow = document.querySelector('#popup-window');
  const workid = this.id;
  workopen += workid;

  const protitle = document.querySelector('#windowtitle');
  protitle.textContent = projectObj[workid].name;

  const proimg = document.querySelector('#windowimg');
  proimg.src = projectObj[workid].image;

  const protech = document.querySelectorAll('#windowtech li');
  protech.forEach((item, i) => {
    item.textContent = projectObj[workid].tech[i];
  });

  const prolive = document.querySelector('#btnlive');
  prolive.href = projectObj[workid].live;

  const prosource = document.querySelector('#btnsource');
  prosource.href = projectObj[workid].source;

  popupwindow.style.display = 'block';
  pageheader.style.display = 'none';
  pagework.style.display = 'none';
  pagefooter.style.display = 'none';
}

const btnWork1 = document.querySelector('#work1');
const btnWork2 = document.querySelector('#work2');
const btnWork3 = document.querySelector('#work3');
const btnWork4 = document.querySelector('#work4');
btnWork1.addEventListener('click', openWindow);
btnWork2.addEventListener('click', openWindow);
btnWork3.addEventListener('click', openWindow);
btnWork4.addEventListener('click', openWindow);

function closeWindow() {
  const popupwindow = document.querySelector('#popup-window');
  popupwindow.style.display = 'none';
  pageheader.style.display = 'flex';
  pagework.style.display = 'block';
  pagefooter.style.display = 'flex';
  const towork = document.createElement('a');
  towork.href = workopen;
  towork.click();
  workopen = '#';
}

const btnclose = document.querySelector('#windowclose');
btnclose.addEventListener('click', closeWindow);
