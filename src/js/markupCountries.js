export function getListCountries({ name: { official }, flags: { svg, alt } }) {
  return `<li class="country-list__item">
  <img src='${svg}' alt='${alt}' width='70' height='30' class='country-list__img' />
  <p class='country-list__text'>${official}</p>
  </li>`;
}

export function getCardCountries({
  capital,
  population,
  languages,
  name: { official },
  flags: { svg, alt },
}) {
  return `<div class="country-info__block">
        <img
          src="${svg}"
          alt="${alt}"
          width="90"
          height="50"
          class="country-info__img"
        />
        <p class="country-info__name">${official}</p>
      </div>
      <p class="country-info__text"> Capital: <span class='country-info__accent'>${capital}</span></p>
      <p class="country-info__text"> Population: <span class='country-info__accent'>${population}</span></p>
      <p class="country-info__text"> Languages: <span class='country-info__accent'>${Object.values(
        languages
      )}</span></p>`;
}
