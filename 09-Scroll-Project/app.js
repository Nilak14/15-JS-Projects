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

// fixed-navbar
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
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerHeight) {
        topLink.classList.add('show-top-link')
    } else {
        topLink.classList.remove('show-top-link')
    }
})

// scroll
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const fixedNav = nav.classList.contains('fixed');
        console.log(fixedNav)
        let position = element.offsetTop;
        // if (!fixedNav) {
        //     position = position - navHeight;
        // }
        // if (navHeight > 82) {
        //     position = position + containerHeight
        // }
        position = position - navHeight;
        window.scrollTo({
            left: 0,
            top: position
        })
        linkContainer.style.height = 0;
    })
})