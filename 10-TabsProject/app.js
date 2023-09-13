const buttons = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        buttons.forEach(button => {
            button.classList.remove('active')
            e.target.classList.add('active')
        })
        articles.forEach(content => {
            content.classList.add('active')
            if (content.id === id) {
                content.classList.remove('active')
            }
        })
    }
})
