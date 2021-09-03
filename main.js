const hambbutton = document.querySelector('.menu-icon');
const main = document.querySelector('.container');
const menu = document.querySelector('.mobile-menu');

function openMenu() {
  main.style.display = 'none';
  menu.style.display = 'block';

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

const form = document.getElementById('contact-form');

const nameInput = document.getElementById('username');
const emailInput = document.getElementById('useremail');
const msgInput = document.getElementById('usermsg');

if (localStorage.getItem('user') !== null) {
  const objStore = JSON.parse(localStorage.getItem('user'));
  nameInput.value = objStore.username;
  emailInput.value = objStore.email;
  msgInput.value = objStore.msg;
}

form.addEventListener('input', () => {
  const obj = {
    username: nameInput.value,
    email: emailInput.value,
    msg: msgInput.value,
  };
  if (typeof (Storage) !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(obj));
  } else {
    document.getElementById('result').innerHTML = 'Sorry, your browser does not support Web Storage...';
  }
});
