// define functions
function fillScrollLine() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrollY = window.scrollY;
  const scrolled = (scrollY / (fullHeight - windowHeight)) * 100;
}

function debounce(func, wait = 15, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// event listeners here
window.addEventListener('scroll', debounce(fillScrollLine));
