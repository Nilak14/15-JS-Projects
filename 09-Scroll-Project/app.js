// Add date
const dateElement = document.querySelector('.date')
const date = new Date;
dateElement.innerHTML = date.getFullYear();

// nav toggle button
const toggleBtn = document.querySelector('.nav-toggle')
const linkContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

toggleBtn.addEventListener('click', () => {
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`
    }
    else {
        linkContainer.style.height = 0;
    }
})

//fixed-navbar
const nav = document.querySelector('nav');
const navHeight = nav.getBoundingClientRect().height
window.addEventListener('scroll', () => {
    if (navHeight < window.pageYOffset) {
        nav.classList.add('fixed')
    } else {
        nav.classList.remove('fixed')
    }
})

// TopLink
const headerHeight = document.querySelector('header').getBoundingClientRect().height;
console.log(headerHeight)
const topLink = document.querySelector('.top-link')
console.log(topLink)
window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerHeight) {
        topLink.classList.add('show-top-link')
    } else {
        topLink.classList.remove('show-top-link')
    }
})
