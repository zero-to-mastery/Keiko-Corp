const button = document.querySelector('.nav-button');
const sticky = document.querySelector('.sticky');
const body = document.body;
// const list = document.querySelectorall("nav a");
// const active = document.querySelector('.nav-click');

// list.addEventListener("click", function () {
//   console.log("click")
// });


//open menu mobile
function openMenu() {
  document.getElementById('myDropdown').classList.toggle("open");
}

 // Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.nav-button')) {
    var dropdowns = document.getElementsByClassName(".menu_mobile");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('open')) {
        openDropdown.classList.remove('open');
      }
    }
  }
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

//button.addEventListener('click', openMenu);
body.addEventListener('scroll', toggleNavbar);
