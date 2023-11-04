

export async function getDrinks(url) {
    const response = await fetch(url)
    const data = await response.json()
    const drinks = data.drinks;
    const newDrink = drinks.map(drink => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink
        return {
            id, name, image
        }
    });
    return newDrink;
}