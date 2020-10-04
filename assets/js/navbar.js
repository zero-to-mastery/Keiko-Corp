const button = document.querySelector('.nav-button');
const sticky = document.querySelector('.sticky');
const body = document.body;
function openMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('open');
}

let lastScrollTop = 0;
function toggleNavbar() {
  console.log('hello');
  var scrollTop = body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    sticky.style.top = '-80px';
  } else {
    sticky.style.top = '0px';
  }
  lastScrollTop = scrollTop;
}

button.addEventListener('click', openMenu);
body.addEventListener('scroll', toggleNavbar);
