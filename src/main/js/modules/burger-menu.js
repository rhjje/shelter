const hamburger = (trigger, burger, bg) => {
  const button = document.querySelector(trigger);
  const menu = document.querySelector(burger);
  const background = document.querySelector(bg);

  button.addEventListener('click', () => {
    button.classList.toggle('menu-icon_open');
    background.classList.toggle('burger-background_closed');
    document.querySelector('.heading').classList.toggle('heading_disabled');

    if (button.classList.contains('menu-icon_open')) {
      menu.style.transform = 'translateX(0px)';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
      menu.style.transform = 'translateX(320px)';
    }
  });

  background.addEventListener('click', () => button.click());
};

export default hamburger;
