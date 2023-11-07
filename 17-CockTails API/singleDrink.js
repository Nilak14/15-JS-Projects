import { getDrinks } from "./Utilities/getDrinks.js"
import { displayDrink } from "./Utilities/displaySingle.js"
import { hideLoading } from "./Utilities/loading.js"

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

async function presentDrink() {
    const id = localStorage.getItem('DrinkId')
    if (!id) {
        window.location.replace('index.html')
    }
    const URL = `${baseURL}${id}`
    let data = await getDrinks(URL)
    let drink = data[0]
    hideLoading()
    displayDrink(drink)
}

window.addEventListener('DOMContentLoaded', presentDrink)
