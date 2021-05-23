export const calcScroll = () => {
  const div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.append(div);

  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
};

const modals = (triggers, modalContainer, modalWindow, closeTrigger) => {
  const buttons = document.querySelectorAll(triggers);
  const container = document.querySelector(modalContainer);
  const modal = document.querySelector(modalWindow);
  const closeModalButton = document.querySelector(closeTrigger);
  const scrollWidth = calcScroll();
  let pets;

  fetch('./assets/json/pets.json')
    .then((result) => result.json())
    .then((result) => {
      pets = result;
    });

  const renderModalWindow = (name) => {
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }

    let pet;
    pets.forEach((item) => {
      if (item.name === name) {
        pet = item;
      }
    });

    modal.innerHTML = `
    <div class="modal-window__image">
      <img src="${pet.img}" alt="Pets">
    </div>
    <div class="information">
      <div class="information__name">${pet.name}</div>
      <div class="information__type-pets">${pet.type} - ${pet.breed}</div>
      <div class="information__description">${pet.description}</div>
      <ul class="information__extra">
        <li class="information__extra-item"><b>Age:</b> <span>${pet.age}</span></li>
        <li class="information__extra-item"><b>Inoculations:</b> <span>${pet.inoculations}</span></li>
        <li class="information__extra-item"><b>Diseases:</b> <span>${pet.diseases}</span></li>
        <li class="information__extra-item"><b>Parasites:</b> <span>${pet.parasites}</span></li>
      </ul>
    </div>`;

    container.classList.remove('modal-window_closed');
    document.body.style.overflowY = 'hidden';
    document.body.style.marginRight = `${scrollWidth}px`;
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      renderModalWindow(button.getAttribute('data-name'));
    });
  });

  const hideModalWindow = () => {
    container.classList.add('modal-window_closed');
    document.body.style.overflowY = '';
    document.body.style.marginRight = '0px';
  };

  container.addEventListener('click', (event) => {
    if (event.target === container) {
      hideModalWindow();
    }
  });

  closeModalButton.addEventListener('click', hideModalWindow);
};

export default modals;
