const cards = document.querySelectorAll('.card_button');
const modalWindowContainer = document.querySelector('.modal-window');
const closeModalButton = document.querySelector('.close-modal');
const backgroundModal = document.querySelector('.modal-background');
let pets;

const renderModalWindow = (name) => {
  while (modalWindowContainer.firstChild) {
    modalWindowContainer.removeChild(modalWindowContainer.firstChild);
  }

  let pet;
  pets.forEach((item) => {
    if (item.name === name) {
      pet = item;
    }
  });

  modalWindowContainer.innerHTML = `<div class="modal-window__image">
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
    </ul>`;

  modalWindowContainer.classList.remove('modal-window_closed');
  closeModalButton.classList.remove('modal-window_closed');
  backgroundModal.classList.remove('modal-window_closed');
};

fetch('./assets/json/pets.json')
  .then((result) => result.json())
  .then((result) => {
    pets = result;
  });

cards.forEach((card) => {
  card.addEventListener('click', () => {
    renderModalWindow(card.getAttribute('data-name'));
  });
});

closeModalButton.addEventListener('click', () => {
  modalWindowContainer.classList.add('modal-window_closed');
  closeModalButton.classList.add('modal-window_closed');
  backgroundModal.classList.add('modal-window_closed');
});

backgroundModal.addEventListener('click', () => {
  closeModalButton.click();
});
