import { products } from "./data.js";

// dark mode
const darkModeBtn = document.querySelector('.darkMode')
darkModeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme')
})

window.addEventListener('DOMContentLoaded', () => {
    renderProduct(products)
})

const productContainer = document.querySelector('.product-container')

function renderProduct(list) {
    list.forEach(product => {
        const element = document.createElement('section');
        element.classList.add('product-card')
        element.innerHTML += `
        <img src=${product.image} alt="product" class="product-img">
        <p class="product-name">${product.title}</p>
        <p class="product-price">$${product.price}</p>
        `

        productContainer.appendChild(element)
    });
}

const listContainer = document.querySelector('.nav-list')
function createUniqueCompany(list) {
    let uniqueCompany = []
    list.forEach(product => {
        if (!uniqueCompany.includes(product.company)) {
            uniqueCompany.push(product.company)
        }
    })
    return uniqueCompany;
}

function createFilterList(uniqueList) {
    uniqueList.forEach(company => {
        listContainer.innerHTML += `
        <li class="nav-link" data-company = "${company}"><a href="">${company}</a></li>
        `
    })
}

createFilterList(createUniqueCompany(products))

const filterLists = document.querySelectorAll('.nav-link');
filterLists.forEach(list => {
    list.addEventListener('click', e => {
        e.preventDefault()
        let companyName = list.dataset.company;
        let filteredProduct = products.filter(product => {
            if (product.company === companyName) {
                return true
            }
            else if (companyName === 'all') {
                return list
            }
        })
        productContainer.innerHTML = ''
        renderProduct(filteredProduct)
    })
})


const searchInputElement = document.querySelector('.search-area');
searchInputElement.addEventListener('keyup', () => {
    let value = searchInputElement.value.toLowerCase()
    let searchedProduct = products.filter(product => {
        if (product.title.includes(value)) {
            return true;
        }
    })
    if (searchedProduct.length === 0) {
        productContainer.innerHTML = '<p class = "error-msg" >No match found</p>'
    } else {
        productContainer.innerHTML = ''
        renderProduct(searchedProduct)
    }
})

let loader = document.querySelector('.loader')
window.addEventListener('load', () => {
    loader.classList.add('hide')
})