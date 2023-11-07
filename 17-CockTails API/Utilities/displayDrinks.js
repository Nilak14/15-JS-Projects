import { getElement as get } from "./getElement.js";
import { setDrinks } from "./setDrinks.js";
import { hideLoading } from "./loading.js";

export const drinkContainer = get('.container')
const errorMessage = get('.error')

export function displayDrink(drinks) {
    if (!drinks) {
        hideLoading()
        errorMessage.classList.remove('hide');
        drinkContainer.innerHTML = null;
        return
    }
    errorMessage.classList.add('hide')
    hideLoading()
    drinks.forEach(drink => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        const link = document.createElement('a')
        link.href = 'singledrinks.html'
        const section = document.createElement('section')
        section.classList.add('drinks')
        const ids = id;
        section.setAttribute('data-id', ids)
        const imageContainer = document.createElement('img')
        const nameHTML = document.createElement('p')
        nameHTML.classList.add('name')
        imageContainer.src = image
        nameHTML.textContent = name;
        section.appendChild(imageContainer)
        section.appendChild(nameHTML)
        link.appendChild(section)
        drinkContainer.appendChild(link)
    });
    if (drinkContainer) {
        setDrinks(drinkContainer)
    }
}
