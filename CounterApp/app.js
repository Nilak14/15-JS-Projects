const number = document.querySelector('#js-count-number');
const increaseBtn = document.querySelector('#increase')
const decreaseBtn = document.querySelector('#decrease')
const resetBtn = document.querySelector('#reset')

let num = 0;

number.innerText = num;



function increase() {
    num++
    number.style.color = '#0bb50b'
    number.innerText = num;
}

function decrease() {
    num--
    if (num === 0) {
        number.style.color = '#000000'
    } else {
        number.style.color = '#b22222'
    }
    number.innerText = num;
}

function reset() {
    num = 0
    number.style.color = '#000000'
    number.innerText = num;
}

increaseBtn.addEventListener('click', () => {
    increase()
})

decreaseBtn.addEventListener('click', () => {
    if (num > 0) {
        decrease()
    }
    else {
        alert('Cant go below 0')
    }
})

resetBtn.addEventListener('click', () => {
    reset();
})