const toggleBtn = document.querySelector('.nav-toggle');
const navList = document.querySelector('.links');
const toggleIcon = document.querySelector('.toggle-icon')

toggleBtn.addEventListener('click', () => {
    if (navList.classList.contains('show-links')) {
        toggleBtn.innerHTML = `<i class="fas fa-bars toggle-icon"></i>`
        navList.classList.remove('show-links');
    } else {
        toggleBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`
        navList.classList.add('show-links')
    }
})