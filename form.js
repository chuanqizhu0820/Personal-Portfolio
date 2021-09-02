
const email = document.getElementById('email');
const form = document.querySelector('#contact');

form.addEventListener('submit', function (e) {
    let emailinput = email.value;
    console.log(emailinput);
})

