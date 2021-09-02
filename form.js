
const email = document.getElementById('email');
const form = document.querySelector('#contact');

form.addEventListener('submit', function (e) {
    let emailinput = email.value;
    if (emailinput.toLowerCase() !== emailinput) {
    e.preventDefault();
    const errorEmail = document.querySelector('small');
    errorEmail.innerText = "Error: please enter lower-case email address";
    errorEmail.style.cssText = 'color: "red"; font-size: 15px';
    }else{
    errotEmail.style.display = 'none';
});
