const questionContainer = document.querySelectorAll('.questions');

questionContainer.forEach(question => {
    const button = question.querySelector('.question-btn');
    button.addEventListener('click', () => {
        questionContainer.forEach(items => {
            if (items !== question) {
                items.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})