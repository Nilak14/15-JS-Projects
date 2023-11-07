import { getElement as get } from "./getElement.js";

const loadElement = get('.loading')

export function hideLoading() {
    loadElement.classList.add('hide-loading')
}

export function showLoading() {
    loadElement.classList.remove('hide-loading')
}

