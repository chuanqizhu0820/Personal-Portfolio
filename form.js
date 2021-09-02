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
