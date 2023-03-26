const BASE_URL = `https://restcountries.com/v3.1`;
const searchParams = 'name,capital,population,languages,flags';

export const fetchCountries = country =>
  fetch(`${BASE_URL}/name/${country}?fields=${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
