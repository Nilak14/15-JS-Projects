import { articles } from "./data.js";

window.addEventListener('DOMContentLoaded', loadContent)

let darkToggle = document.querySelector('.darkModeToggle');
darkToggle.addEventListener('click', () => {
    if (darkToggle.textContent === 'Dark Mode') {
        darkToggle.textContent = 'Light Mode'
        document.documentElement.classList.add('darkMode')
    }
    else {
        console.log('hi')
        darkToggle.textContent = 'Dark Mode';
        document.documentElement.classList.remove('darkMode')
    }
})


function loadContent() {
    let section = document.createElement('section');
    section.classList.add('article-section')
    articles.forEach(article => {
        section.innerHTML += `
        <article class="article">
                <h1 class="article__header">${article.title}</h1>
                <p class="article__details">${article.date.toDateString()}<span class="article__length">${article.length} min read</span></p>
                <p class="article__description">${article.snippet}</p>
            </article>
        `
    })
    document.querySelector('.container').appendChild(section);
}