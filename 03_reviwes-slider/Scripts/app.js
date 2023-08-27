import { personsReviewData } from "./data.js";

const img = document.querySelector('#person-image');
const name = document.querySelector('#name');
const job = document.querySelector('#job');
const review = document.querySelector('#review');

const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const randomButton = document.querySelector('.random-btn');

// staring items
let currentReview = 0;

// function to load HTML
function loadHTML(dataIndex) {
    const reviewData = personsReviewData[dataIndex];
    img.src = reviewData.img
    name.innerText = reviewData.name
    job.innerText = reviewData.job
    review.innerText = reviewData.review
}

window.addEventListener('DOMContentLoaded', () => {
    loadHTML(currentReview);
})

// function for showing previous review
function slidePrev() {
    currentReview--
    if (currentReview < 0) {
        currentReview = personsReviewData.length - 1;
        loadHTML(currentReview)
    } else {
        loadHTML(currentReview)
    }
}

// function for showing next review
function slideNext() {
    currentReview++
    if (currentReview > personsReviewData.length - 1) {
        currentReview = 0
        loadHTML(currentReview);
    } else {
        loadHTML(currentReview)
    }
}

prevButton.addEventListener('click', () => {
    slidePrev()
})

nextButton.addEventListener("click", () => {
    slideNext()
})

// making review slidable through keyboard
window.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key === 'ArrowRight') {
        slideNext()
    }
    else if (key === 'ArrowLeft') {
        slidePrev()
    }
})

randomButton.addEventListener('click', () => {

    let randomIndex = Math.floor(Math.random() * personsReviewData.length)
    while (randomIndex === currentReview) {
        randomIndex = Math.floor(Math.random() * personsReviewData.length)
    }
    currentReview = randomIndex
    loadHTML(randomIndex)

})