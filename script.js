const inputCheck = document.querySelector("input[type='checkbox']");
const body = document.getElementsByTagName('body')[0];
const content = document.getElementsByClassName('hero_content')[0];
const contentPara = document.querySelector('.hero_content > p');
const toggleBar = document.getElementById('toggle-bar');

//dark mode
function changeToDarkMode() {
  body.style.background = '#132743';
  body.style.color = '#fff';
  content.style.color = '#eaeaea';
  contentPara.style.color = '#aeaeae';
  toggleBar.style.background = '#01a9b4';
}

//light mode
function changeToLightMode() {
  body.style.background = '#fff';
  body.style.color = '#000';
  content.style.color = '#1d1c1c';
  contentPara.style.color = 'rgb(90, 90, 90)';
  toggleBar.style.background = '#d6e0f0';
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
