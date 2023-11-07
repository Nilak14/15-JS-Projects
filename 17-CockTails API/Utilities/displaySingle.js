import { getElement as get } from "./getElement.js"


export function displayDrink(drink) {
    const { strDrink: name, strDrinkThumb: image, strInstructions: instruction, } = drink
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
        drink.strIngredient8,
        drink.strIngredient9,
        drink.strIngredient10,
        drink.strIngredient11,
        drink.strIngredient12,
        drink.strIngredient13,
        drink.strIngredient14,
        drink.strIngredient15
    ]
    const imageContainer = get('.single-image')
    const nameContainer = get('.name')
    const instructionContainer = get('.instructions')
    const listContainer = get('.ingredients')
    document.title = name;
    imageContainer.src = image;
    nameContainer.textContent = name;
    instructionContainer.textContent = instruction;
    const ingredients = list.map(ingredient => {
        if (ingredient) {
            return ` <li class="far fa-check-square"> ${ingredient}</li>`
        }
    })
    listContainer.innerHTML = ingredients.join('');
}


