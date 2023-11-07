export function setDrinks(section) {
    section.addEventListener('click', (e) => {
        let id = e.target.parentElement.dataset.id
        localStorage.setItem('DrinkId', id)
    })
}