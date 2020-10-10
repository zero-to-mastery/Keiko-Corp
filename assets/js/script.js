let currentScrollY = 0;
let showScrollButton = false;

function onScroll() {
  currentScrollY = window.pageYOffset;
  showScrollButton = Boolean(currentScrollY > 1);

  showScrollButton
    ? scrollButton.classList.remove('scroll-to-top-wrapper--hide')
    : scrollButton.classList.add('scroll-to-top-wrapper--hide');
}


window.onload = function() {
    main = document.getElementById('main');
    scrollButton = document.getElementById('scroll-to-top-wrapper');
    document.addEventListener('scroll', onScroll, false)
}


// modals

// document.getElementById('loginModal1').addEventListener('click', function() {
//     document.getElementById('loginModal1').style.display = 'block'
// }

let loginModal = document.getElementById('loginModal1');
let registerModal = document.getElementById('registerModal1');
let loginBtn = document.getElementById('login');
let registerBtn = document.getElementById('register');
let span = document.getElementsByClassName('close')[0];
let password = document.getElementById('password');
let eye = document.getElementById('visibility');

/* Password visiblity toggle */
eye.onclick = function () {
  // Toggle the type attribute
  const passwordState = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', passwordState);
  
  // Toggle color
  passwordState === 'password' ? eye.style.color = '#757575' : eye.style.color = '#FD6854';
}
/* Password visibility toggle end */

loginBtn.onclick = function () {
  loginModal.style.display = 'block';
};

registerBtn.onclick = function () {
  registerModal.style.display = 'block';
};

span.onclick = function () {
  if ((loginModal.style.display = 'block')) {
    loginModal.style.display = 'none';
  } else if ((registerModal.style.display = 'block')) {
    registerModal.style.display = 'none';
  }
};


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    } else if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}


