/* eslint-disable arrow-body-style */
const cardsContainer = document.querySelector('.cards');
const slideLeft = document.querySelector('.slide-left');
const slideRight = document.querySelector('.slide-right');

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

const createCard = (image, name) => {
  return `<div class="card">
  <div class="card__image">
    <img src="${image}" alt="Pets">
  </div>
  <div class="card__name">${name}</div>
  <button class="card_button" data-value="${name}">Learn more</button>
</div>`;
};

const createCards = (cards) => {
  cards.forEach((card) => {
    cardsContainer.innerHTML += createCard(card.img, card.name);
  });
};

fetch('./assets/json/pets.json')
  .then((result) => result.json())
  .then((result) => {
    const cards = result.sort(() => Math.random() - 0.5);
    createCards(cards);
  });
