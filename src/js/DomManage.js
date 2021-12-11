import validator from './validator';
import paymentSystem from './paymentSystem';

export default class DomManage {
  constructor() {
    this.systems = ['mir', 'american_express', 'diners_club', 'jcb', 'maestro', 'mastercard', 'VISA'];
  }

  drawWidget() {
    const button = document.querySelector('[data-id=card-submit]');
    const cards = document.querySelector('.cards');
    for (let i = 0; i < this.systems.length; i += 1) {
      const cardEl = document.createElement('div');
      cardEl.classList.add('card', 'not-active', this.systems[i]);
      cards.appendChild(cardEl);
    }

    function mistakeInfo(message) {
      const mistake = document.querySelector('.error');
      mistake.innerText = `${message}`;
    }

    function changeClass(card) {
      card.classList.toggle('not-active');
      card.classList.toggle('active');
    }

    function showSystem(system) {
      const activeCard = document.querySelector('.active');
      if (activeCard) {
        changeClass(activeCard);
      }
      const firstCard = document.querySelector('.cards .card');
      const inputCard = document.querySelector(`.${system}`);
      changeClass(inputCard);
      cards.replaceChild(inputCard, firstCard);
      cards.appendChild(firstCard);
    }

    button.addEventListener('click', (e) => {
      e.preventDefault();
      const cardActive = document.querySelector('.active');
      const inputEl = document.querySelector('[id=card-input]');
      const inputValue = inputEl.value;
      const value = inputValue.replace(/\s+/g, '');
      if (value.length < 13 || value.length > 19) {
        mistakeInfo('Card number must have at least 13 and max 19 numbers');
      } else if (validator(value) === false) {
        mistakeInfo('Wrong card number');
        changeClass(cardActive);
      } else {
        showSystem(paymentSystem(value));
        mistakeInfo('');
      }
    });
  }
}
