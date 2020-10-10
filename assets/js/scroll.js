
function onScroll(){
  const mainHeader=document.querySelector('header');
  const logo=document.querySelector('.logo');
    if(window.pageYOffset>0){
      mainHeader.classList.add('scroll');
      logo.style.height='70px';
      } else{
      mainHeader.classList.remove('scroll');
      logo.style.height='80px';
    }
}
window.addEventListener('scroll',onScroll);