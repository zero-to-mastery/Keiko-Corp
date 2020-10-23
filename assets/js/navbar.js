const button = document.querySelector('.nav-button');
const sticky = document.querySelector('.sticky');
const body = document.body;
// const list = document.querySelectorall("nav a");
// const active = document.querySelector('.nav-click');

// list.addEventListener("click", function () {
//   console.log("click")
// });

function openMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('open');
}

let lastScrollTop = 0;
function toggleNavbar() {
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
