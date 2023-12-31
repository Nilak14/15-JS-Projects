import { getDrinks } from "./Utilities/getDrinks.js"
import { displayDrink } from "./Utilities/displayDrinks.js";

import { search } from "./Utilities/search.js";

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a'

async function displayData() {
    const drink = await getDrinks(URL);
    displayDrink(drink)
}

search()

window.addEventListener('DOMContentLoaded', displayData)
