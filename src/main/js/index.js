import burgerMenu from './modules/burger-menu';
import modals from './modules/modals';
import slider from './slider';

document.addEventListener('DOMContentLoaded', () => {
  modals('.card_button', '.modal-window', '.modal-window__dialog', '.close-modal');
});
