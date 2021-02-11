import renderModalWindow from './modal-window';

const toBeginning = document.querySelector('.to-beginning');
const toEnd = document.querySelector('.to-end');
const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');
const currentPage = document.querySelector('.current-page');

let pets;
let numbersOfCards;

if (window.innerWidth > 1279) {
  numbersOfCards = 8;
} else if (window.innerWidth > 767) {
  numbersOfCards = 6;
} else {
  numbersOfCards = 3;
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

slideRight.addEventListener('click', () => {
  renderCards();
});

fetch('./assets/json/pets.json')
  .then((result) => result.json())
  .then((result) => {
    pets = result;
    renderCards();
  });

window.addEventListener('resize', (event) => {
  console.log(event.target.innerWidth);
});

console.log(window.innerWidth);

