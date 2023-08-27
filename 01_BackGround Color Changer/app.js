const colorChangeButton = document.querySelector('.change-color-btn');

// Returns a random hex value color
const randomColor = () => {
    const hexValue = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        let value = hexValue[Math.floor(Math.random() * 16)]
        color += value
    }
    return color
}

// Changes the hex value color in screen
function changeText(color) {
    document.querySelector('.color-value').innerText = color
}

colorChangeButton.addEventListener('click', () => {
    let color = randomColor()
    document.body.style.backgroundColor = color
    changeText(color)
    console.log(color)
})

// Changes color also when clicked space-bar also 
window.addEventListener('keydown', (e) => {
    let key = e.key;
    let color = randomColor()
    if (key === ' ') {
        document.body.style.backgroundColor = color
        changeText(color)
    }
})

// Copy the color hex value when clicked this copy button
document.querySelector('.copy').addEventListener('click', () => {
    let colorValue = document.querySelector('.color-value').innerText;
    navigator.clipboard.writeText(colorValue);
    document.querySelector('.copy').classList.add('active')
    setTimeout(() => {
        document.querySelector('.copy').classList.remove('active')
    }, 2000)
})

