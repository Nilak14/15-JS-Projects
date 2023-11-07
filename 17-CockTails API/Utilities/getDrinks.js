export async function getDrinks(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const drinks = data.drinks;
        return drinks;
    } catch (error) {
        console.log(error)
    }

}