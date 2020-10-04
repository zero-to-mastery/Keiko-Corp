const button = document.querySelector('.nav-button');

function openMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('open');
}

button.addEventListener('click', openMenu);
