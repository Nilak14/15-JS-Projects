// =========================Variables======================

const alertMsg = document.querySelector('.message')
const form = document.querySelector('.todo-form');
const inputElement = document.querySelector('#todo-input')
const todoList = document.querySelector('.todo-list')
const todoListContainer = document.querySelector('.todo-list-container')
const clearAllBtn = document.querySelector('.clear-btn')
const submitBtn = document.querySelector('.submit-button')

let isEditing = false;
let editID = '';
let editElement;

// =======================End of Variables====================




// ===========================Event Listeners==================


form.addEventListener('submit', addItem)
clearAllBtn.addEventListener('click', clearAll)

// =======================End Event Listeners==================




// ============================Functions================

function addItem(e) {
    e.preventDefault();
    let userValue = inputElement.value
    let uniqueID = new Date().getTime().toString();
    if (userValue && isEditing === false) {
        const element = document.createElement('section');
        element.classList.add('todo');
        let attribute = document.createAttribute('data-id')
        attribute.value = uniqueID;
        element.setAttributeNode(attribute)
        element.innerHTML = `
        <p class="todo-item">${userValue}</p>
                        <div class="btn-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
        `
        const dltButton = element.querySelector('.delete-btn')
        const editButton = element.querySelector('.edit-btn');

        dltButton.addEventListener('click', deleteTodoItem)
        editButton.addEventListener('click', editTodoItem)

        todoList.appendChild(element);
        todoListContainer.classList.add('show-container')
        showAlert('Item Added', 'success')
        setDefault();
    }
    else if (userValue && isEditing) {
        editElement.innerText = inputElement.value
        showAlert('Item Edited', 'success')
        submitBtn.innerText = 'Add'
        setDefault()
    }
    else {
        showAlert('Please Enter a Value', 'danger')
    }
}

function showAlert(message, type) {
    alertMsg.textContent = message;
    alertMsg.classList.add(type)
    setTimeout(() => {
        alertMsg.classList.remove(type)
    }, 1000)
}

function setDefault() {
    inputElement.value = "";
    isEditing = false;
    editID = '';
    editElement;


}

function deleteTodoItem(e) {
    let element = e.currentTarget.parentElement.parentElement
    todoList.removeChild(element)
    showAlert('Item deleted', 'danger')
    if (todoList.children.length === 0) {
        todoListContainer.classList.remove('show-container')
    }
    setDefault()
}

function editTodoItem(e) {
    isEditing = true;
    editID = e.currentTarget.parentElement.parentElement.dataset.id
    editElement = e.currentTarget.parentElement.previousElementSibling;
    inputElement.value = editElement.innerText
    submitBtn.innerText = 'Edit'
}

function clearAll() {
    document.querySelectorAll('.todo').forEach((item) => {
        item.remove();
    });
    showAlert('All Items Cleared', 'danger')
    todoListContainer.classList.remove('show-container')
    setDefault()

}

// ===============================End of Functions===========

// ==============================Local Storage====================

function addToLocalStorage(id, value) {

}

// ==========================End Local Storage====================