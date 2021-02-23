/* eslint-disable arrow-body-style */
const cardsContainer = document.querySelector('.cards');
const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');

let pets;
let offset = -1080;

slideLeft.addEventListener('click', () => {
  offset += -1080;
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].style.transform = `translateX(${offset}px)`;
  }
});

slideRight.addEventListener('click', () => {
  offset += 1080;
  const cards = document.querySelectorAll('.card');
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].style.transform = `translateX(${offset}px)`;
  }
});

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
  pets.sort(() => Math.random() - 0.5);

  for (let i = 0; i < 3; i += 1) {
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

// const createCard = (image, name) => {
//   return `<div class="card">
//   <div class="card__image">
//     <img src="${image}" alt="Pets">
//   </div>
//   <div class="card__name">${name}</div>
//   <button class="card_button" data-value="${name}">Learn more</button>
// </div>`;
// };

// const createCards = (cards) => {
//   for (let i = 0; i < 3; i += 1) {
//     cardsContainer.innerHTML += createCard(cards[i].img, cards[i].name);
//   }
// };

fetch('./assets/json/pets.json')
  .then((result) => result.json())
  .then((result) => {
    pets = result;
  });
