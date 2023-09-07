// nav toggle button
const toggleBtn = document.querySelector('.nav-toggle')
const linkContainer = document.querySelector('.links-container')

toggleBtn.addEventListener('click', () => {
    linkContainer.classList.toggle('show-list')
})