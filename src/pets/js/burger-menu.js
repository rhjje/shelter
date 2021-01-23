const burgerButton = document.querySelector('.menu-icon');
const burgerButtonImage = document.querySelector('.menu-icon > img');
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
    burgerButtonImage.src = 'assets/icons/burger.png';
  } else {
    document.body.style.overflowY = 'visible';
    burgerMenu.style.transform = 'translateX(320px)';
    setTimeout(() => {
      burgerButtonImage.src = 'assets/icons/burger-black.png';
    }, 400);
  }
});

burgerBackground.addEventListener('click', () => {
  burgerButton.click();
});
