function getElement(selection) {
    const element = document.querySelector(selection)
    if (element) {
        return element;
    }
    throw new Error(`Please check ${selection} selector, no such element exists.`)
}

class Gallery {
    constructor(element) {
        this.container = element
        this.list = [...element.querySelectorAll('img')];
        this.modal = getElement('.modal')
        this.modalImg = getElement('.main-img')
        this.imageName = getElement('.image-name')
        this.modalImages = getElement('.modal-images')
        this.closeBtn = getElement('.close-btn')
        this.nextBtn = getElement('.next-btn')
        this.prevBtn = getElement('.prev-btn')
        this.container.addEventListener('click', function (e) {
            if (e.target.classList.contains('img')) {
                this.openModal(e.target, this.list);
            }
        }.bind(this));
        this.closeBtn.addEventListener('click', this.closeModal.bind(this))
    }

    openModal(selectedImage, list) {
        console.log(list)
        this.modal.classList.add('open')
        this.setMainImage(selectedImage)
    }

    setMainImage(mainImage) {
        this.modalImg.src = mainImage.src
        this.imageName.textContent = mainImage.title
    }
    closeModal() {
        this.modal.classList.remove('open')
    }
}

const nature = new Gallery(getElement('.nature'))
const city = new Gallery(getElement('.city'))