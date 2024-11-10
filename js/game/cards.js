import { NUMBER_OF_CARDS, NUMBER_OF_IMAGES } from '../utils/const.js';
import { shuffle } from '../utils/utils.js';

const container = document.querySelector('.field');
const template = document.querySelector('#card').content.querySelector('.card');
const fragment = document.createDocumentFragment();

const images = Array.from({ length: NUMBER_OF_IMAGES }, (_, i) =>  i + 1);

let counter;
let indexes;

const shuffleCards = () => {
  indexes = shuffle(new Array(2).fill(images).flat());
};

const createCard = () => {
  const newCard = template.cloneNode(true);
  const img = newCard.querySelector('.card__img');
  img.src = `./assets/content/${indexes[counter]}.png`;
  newCard.dataset.id = indexes[counter];
  counter++;

  fragment.append(newCard);
};

const renderCards = () => {
  counter = 0;
  shuffleCards();

  for (let i = 0; i < NUMBER_OF_CARDS; i++) {
    createCard();
  }

  container.append(fragment);
};

export { renderCards };