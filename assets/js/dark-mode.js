const toggleContainer = document.querySelector('#toggle-container');
const inputCheck = document.querySelector('input[type="checkbox"]');
const body = document.querySelector('body');
const content = document.querySelector('.hero_content');
const contentPara = document.querySelector('.hero_content > p');
const toggleBar = document.querySelector('#toggle-bar');
const contactBanner = document.querySelector('.contact-banner-container');
const updateBanner = document.querySelector('.neverMissUpdate');
const updateHeading = document.querySelector('.update-heading');
const footerLink = document.querySelectorAll('.sub-footer-link > li > a');
const footericons=document.querySelectorAll('.icon')


//dark mode
function changeToDarkMode() {
  body.style.background = '#132743';
  body.style.color = '#fff';
  content.style.color = '#eaeaea';
  contentPara.style.color = '#aeaeae';
  toggleBar.style.background = '#01a9b4';
  contactBanner.style.background = '#132743';
  updateBanner.style.backgroundColor = '#343a40';
  updateHeading.style.color = '#fff';
  for (i = 0; i < footerLink.length; i++) footerLink[i].style.color = 'white';
  footericons.forEach(e=>e.style.color="#000")
}

//light mode
function changeToLightMode() {
  body.style.background = '#fff';
  body.style.color = '#000';
  content.style.color = '#1d1c1c';
  contentPara.style.color = 'rgb(90, 90, 90)';
  toggleBar.style.background = '#ebecf1';
  contactBanner.style.background = '#ebecf1';
  updateBanner.style.backgroundColor = '#ebecf1';
  updateHeading.style.color = '#1d1c1c';
}

//callback function to toggle between modes
function changeBackground() {
  if (inputCheck.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    changeToDarkMode();
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    changeToLightMode();
    localStorage.setItem('theme', 'light');
  }
}

//event listener to toggle betwen light and dark modes
inputCheck.addEventListener('change', changeBackground);

//to retain the mode with the help of local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    inputCheck.checked = true;
    changeToDarkMode();
  }
}

function changeTeamMemberColor(color){
  Array.from(teamMemberName).forEach(item=>{
    item.style.color = color;
  })
}