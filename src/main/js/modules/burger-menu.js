const burgerButton = document.querySelector('.menu-icon');
const burgerMenu = document.querySelector('.burger-menu');
const heading = document.querySelector('.heading');
const burgerBackground = document.querySelector('.burger-background');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('menu-icon_open');
  heading.classList.toggle('heading_disabled');
  burgerBackground.classList.toggle('burger-background_closed');

  if (burgerButton.classList.contains('menu-icon_open')) {
    burgerMenu.style.transform = 'translateX(0px)';
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'visible';
    burgerMenu.style.transform = 'translateX(320px)';
  }
});

burgerBackground.addEventListener('click', () => {
  burgerButton.click();
});
