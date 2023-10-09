
let number = [...document.querySelectorAll('.number')]
number.forEach(item => {
    increase(item)
})


function increase(items) {
    let initialValue = 0;
    let value = items.dataset.id;
    let increment = Math.ceil(value / 1000);
    let intervalID = setInterval(() => {
        initialValue += increment
        if (initialValue > value) {
            items.textContent = `${value}+`;
            clearInterval(intervalID)
            return
        }
        items.textContent = `${initialValue}+`
    }, 1)
}
