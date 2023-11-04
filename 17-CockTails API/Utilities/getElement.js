export function getElement(selection) {
    const element = document.querySelector(selection)
    if (element) {
        return element
    }
    throw new Error(`${selection} does not exist`)
}