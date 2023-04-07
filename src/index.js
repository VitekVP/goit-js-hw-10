import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import { getListCountries, getCardCountries } from './js/markupCountries';

const DEBOUNCE_DELAY = 300;
let markup = '';
let country = '';
let quantityCountry = null;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const cardEl = document.querySelector('.country-info');

inputEl.addEventListener(
  'input',
  debounce(handleInputCountries, DEBOUNCE_DELAY)
);

function handleInputCountries(event) {
  country = event.target.value.trim();

  if (!country) {
    getCleanFields();
    return;
  }

  fetchCountries(country)
    .then(data => {
      getCleanFields();

      quantityCountry = data.length;

      if (quantityCountry > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name'
        );
        return;
      }

      if (quantityCountry === 1) {
        addMarkupCard(data);
        return;
      }

      addMarkupList(data);
    })
    .catch(() => {
      getCleanFields();
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function getCleanFields() {
  listEl.innerHTML = '';
  cardEl.innerHTML = '';
}

function addMarkupList(data) {
  markup = data.map(el => getListCountries(el)).join('');
  listEl.innerHTML = markup;
}

function addMarkupCard(data) {
  markup = data.map(el => getCardCountries(el));
  cardEl.innerHTML = markup;
}
