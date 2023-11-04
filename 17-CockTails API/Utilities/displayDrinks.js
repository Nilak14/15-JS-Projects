import { getElement as get } from "./getElement.js";

const drinkContainer = get('.container')


export function displayDrink(drinks) {
    drinks.forEach(drink => {
        const link = document.createElement('a')
        link.href = 'singledrinks.html'
        const section = document.createElement('section')
        section.classList.add('drinks')
        const id = drink.id;
        section.setAttribute('data-id', id)
        const image = document.createElement('img')
        const name = document.createElement('p')
        name.classList.add('name')
        image.src = drink.image
        name.textContent = drink.name;
        section.appendChild(image)
        section.appendChild(name)
        link.appendChild(section)
        drinkContainer.appendChild(link)
    });
}
