import { getElement as get } from "./getElement.js";
import { getDrinks } from "./getDrinks.js";
import { displayDrink, drinkContainer } from "./displayDrinks.js";

const searchBar = get('#search')
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


export async function search() {
    searchBar.addEventListener('keyup', (e) => {
        let value = searchBar.value;
        if (value) {
            const url = `${URL}${value}`
            getDrinks(url)
                .then(data => {
                    drinkContainer.innerHTML = null;
                    displayDrink(data)
                })
        }
    })
}


