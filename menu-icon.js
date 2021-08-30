
const icon = document.querySelector(".menu-icon");

function expand() {
    const list = document.querySelector(".menu-list")
    let li1 = document.createElement('li');
    li1.id = 'portfolio';
    li1.textContent = 'Portfolio';
    list.appendChild(li1);

    let li2 = document.createElement('li');
    li2.id = 'about';
    li2.textContent = 'About';
    list.appendChild(li2);

    let li3 = document.createElement('li');
    li3.id = 'contact';
    li3.textContent = 'Contact';
    list.appendChild(li3);

    const menuicon = document.querySelector("#menu-icon");
    menuicon.remove();
}
icon.addEventListener('click', expand);