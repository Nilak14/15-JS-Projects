import { getElement as get } from "./getElement.js";
import { getDrinks } from "./getDrinks.js";
import { displayDrink, drinkContainer } from "./displayDrinks.js";
import { showLoading, hideLoading } from "./loading.js";

const searchBar = get('#search')
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='


export function search() {
    searchBar.addEventListener('keyup', () => {
        showLoading()
        let value = searchBar.value;
        if (value) {
            const url = `${baseURL}${value}`
            getDrinks(url)
                .then(data => {
                    hideLoading()
                    drinkContainer.innerHTML = null;
                    displayDrink(data)
                })
        }
    })
}


