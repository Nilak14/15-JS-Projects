

export async function getDrinks(url) {
    const response = await fetch(url)
    const data = await response.json()
    const drinks = data.drinks;
    return drinks;
}