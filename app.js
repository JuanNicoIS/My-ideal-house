window.addEventListener('scroll', function() {
  const menu = document.querySelector('.menu');
  const footer = document.querySelector('.footer');
  const content = document.querySelector('.content');
  const miniMenu = document.querySelector('.mini-menu');
  const heroHeight = document.querySelector('.hero').offsetHeight;
  const contentTop = content.offsetTop;
  const contentBottom = content.offsetTop + content.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  // Efecto del menú principal
  if (window.scrollY >= heroHeight && scrollPosition < contentBottom) {
    menu.classList.add('fixed');
    footer.classList.remove('visible');
  } else if (scrollPosition >= contentBottom) {
    menu.classList.remove('fixed');
    footer.classList.add('visible');
  } else {
    menu.classList.remove('fixed');
    footer.classList.remove('visible');
  }

  // Efecto del mini menú
  if (window.scrollY >= contentTop && scrollPosition <= contentBottom) {
    miniMenu.style.opacity = '1';
    miniMenu.style.transform = 'translateX(0)';
  } else {
    miniMenu.style.opacity = '0';
    miniMenu.style.transform = 'translateX(-100%)';
  }
});