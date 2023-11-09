import { people } from "./data.js";

const container = document.querySelector('.slider-container')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

const slideContent = people.map((item, index) => {
    const { img, name, job, text } = item;
    let position = 'next'
    if (index === 0) {
        position = 'active'
    }
    if (index === people.length - 1) {
        position = 'end'
    }
    return `
     <article class="slider ${position}">
                        <img src="${img}" alt="${name}" class="img">
                        <p class="name">${name}</p>
                        <p class="job">${job}</p>
                        <p class="text">${text}</p>
                    </article>
    `
}).join(" ")

container.innerHTML = slideContent;

function slider(type) {
    const active = document.querySelector('.active')
    const last = document.querySelector('.end')
    let next = active.nextElementSibling;
    if (!next) {
        next = container.firstElementChild;
    }

    active.classList.remove('active')
    last.classList.remove('end')
    next.classList.remove('next')

    if (type) {
        active.classList.add('next')
        last.classList.add('active')
        next = last.previousElementSibling
        if (!next) {
            next = container.lastElementChild
        }
        next.classList.remove('next')
        next.classList.add('end')
        return
    }
    active.classList.add('end')
    last.classList.add('next')
    next.classList.add('active')


}


prevButton.addEventListener('click', () => {
    slider('prev')
})

nextButton.addEventListener('click', () => {
    slider()
})