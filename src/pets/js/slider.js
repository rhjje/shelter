import renderModalWindow from './modal-window';

const toBeginning = document.querySelector('.to-beginning');
const toEnd = document.querySelector('.to-end');
const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');
const page = document.querySelector('.current-page__number');

let pets;
let numbersOfCards;
let currentPage = 1;
let maxNumberPage;

if (window.innerWidth > 1279) {
  numbersOfCards = 8;
  maxNumberPage = 6;
} else if (window.innerWidth > 767) {
  numbersOfCards = 6;
  maxNumberPage = 8;
} else {
  numbersOfCards = 3;
  maxNumberPage = 16;
}

class Card {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }

  render() {
    const card = `<div class="card">
      <div class="card__image">
        <img src="${this.image}" alt="Pets">
      </div>
      <div class="card__name">${this.name}</div>
      <button class="card_button" data-name="${this.name}">Learn more</button>
    </div>`;

    return card;
  }
}

const renderCards = () => {
  const cardsContainer = document.querySelector('.cards');
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
  pets.sort(() => Math.random() - 0.5);

  for (let i = 0; i < numbersOfCards; i += 1) {
    const card = new Card(pets[i].name, pets[i].img);
    cardsContainer.innerHTML += card.render();
  }

  const cards = document.querySelectorAll('.card_button');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      renderModalWindow(card.getAttribute('data-name'));
    });
  });
};

const setSettingsControlPanel = () => {
  if (currentPage === 1) {
    toBeginning.classList.add('button_disabled');
    toBeginning.setAttribute('disabled', true);
    slideLeft.classList.add('button_disabled');
    slideLeft.setAttribute('disabled', true);

    toEnd.classList.remove('button_disabled');
    toEnd.removeAttribute('disabled');
    slideRight.classList.remove('button_disabled');
    slideRight.removeAttribute('disabled');
  } else if (currentPage === maxNumberPage) {
    toBeginning.classList.remove('button_disabled');
    toBeginning.removeAttribute('disabled');
    slideLeft.classList.remove('button_disabled');
    slideLeft.removeAttribute('disabled');

    toEnd.classList.add('button_disabled');
    toEnd.setAttribute('disabled', true);
    slideRight.classList.add('button_disabled');
    slideRight.setAttribute('disabled', true);
  } else {
    toBeginning.classList.remove('button_disabled');
    toBeginning.removeAttribute('disabled');
    slideLeft.classList.remove('button_disabled');
    slideLeft.removeAttribute('disabled');

    toEnd.classList.remove('button_disabled');
    toEnd.removeAttribute('disabled');
    slideRight.classList.remove('button_disabled');
    slideRight.removeAttribute('disabled');
  }
};

slideRight.addEventListener('click', () => {
  if (currentPage < maxNumberPage) {
    currentPage += 1;
    page.innerText = currentPage;
    renderCards();
  }

  setSettingsControlPanel();
});

slideLeft.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    page.innerText = currentPage;
    renderCards();
  }

  setSettingsControlPanel();
});

toBeginning.addEventListener('click', () => {
  currentPage = 1;
  page.innerText = 1;
  renderCards();
  setSettingsControlPanel();
});

toEnd.addEventListener('click', () => {
  currentPage = maxNumberPage;
  page.innerText = maxNumberPage;
  renderCards();
  setSettingsControlPanel();
});

fetch('./assets/json/pets.json')
  .then((result) => result.json())
  .then((result) => {
    pets = result;
    renderCards();
  });

window.addEventListener('resize', (event) => {
  let currentNumbersOfCards;
  let currentMaxNumberPage;

  if (event.target.innerWidth > 1279) {
    currentNumbersOfCards = 8;
    currentMaxNumberPage = 6;
  } else if (event.target.innerWidth > 767) {
    currentNumbersOfCards = 6;
    currentMaxNumberPage = 8;
  } else {
    currentNumbersOfCards = 3;
    currentMaxNumberPage = 16;
  }

  if (currentNumbersOfCards !== numbersOfCards) {
    numbersOfCards = currentNumbersOfCards;
    maxNumberPage = currentMaxNumberPage;
    currentPage = 1;
    page.innerText = 1;
    setSettingsControlPanel();
    renderCards();
  }
});
