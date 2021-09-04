const email = document.getElementById('email');
const form = document.querySelector('#contactform');

form.addEventListener('submit', (e) => {
  const emailinput = email.value;
  const errorEmail = document.querySelector('small');
  if (emailinput.toLowerCase() !== emailinput) {
    e.preventDefault();
    errorEmail.innerText = 'Error: please enter lower-case email address';
  } else {
    errorEmail.style.display = 'none';
  }
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
