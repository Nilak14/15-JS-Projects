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
        this.closeModal = this.closeModal.bind(this)
        this.prevImage = this.prevImage.bind(this)
        this.nextImage = this.nextImage.bind(this)
        this.selectImageFromList = this.selectImageFromList.bind(this)
        this.container.addEventListener('click', function (e) {
            if (e.target.classList.contains('img')) {
                this.openModal(e.target, this.list);
            }
        }.bind(this));
    }

    openModal(selectedImage, list) {
        this.modal.classList.add('open')
        this.setMainImage(selectedImage)
        this.modalImages.innerHTML = list.map(item => {
            return `<img src="${item.src}" title="${item.title}" alt="${item.alt}" class="${item.dataset.id === selectedImage.dataset.id ? 'modal-img active' : 'modal-img'}" data-id="${item.dataset.id}">`
        }).join('')
        this.modalImages.querySelector('.active').scrollIntoView({ behavior: 'smooth' })
        this.closeBtn.addEventListener('click', this.closeModal)
        this.prevBtn.addEventListener('click', this.prevImage)
        this.nextBtn.addEventListener('click', this.nextImage)
        this.modalImages.addEventListener('click', this.selectImageFromList)


    }

    setMainImage(mainImage) {
        this.modalImg.src = mainImage.src
        this.imageName.textContent = mainImage.title
    }
    closeModal() {
        this.modal.classList.remove('open')
        this.closeBtn.removeEventListener('click', this.closeModal)
        this.prevBtn.removeEventListener('click', this.prevImage)
        this.nextBtn.removeEventListener('click', this.nextImage)
        this.modalImages.removeEventListener('click', this.selectImageFromList)

    }
    prevImage() {
        const selectedImage = this.modalImages.querySelector('.active');
        const prevImage = selectedImage.previousElementSibling || this.modalImages.lastElementChild;
        this.setMainImage(prevImage)
        prevImage.scrollIntoView({ behavior: 'smooth' })
        selectedImage.classList.remove('active')
        prevImage.classList.add('active');
    }

    nextImage() {
        const selectedImage = this.modalImages.querySelector('.active');
        const nextImage = selectedImage.nextElementSibling || this.modalImages.firstElementChild;
        this.setMainImage(nextImage)
        nextImage.scrollIntoView({ behavior: 'smooth' })
        selectedImage.classList.remove('active')
        nextImage.classList.add('active');
    }

    selectImageFromList(e) {
        if (e.target.classList.contains('modal-img')) {
            let active = this.modalImages.querySelector('.active');
            active.classList.remove('active')
            this.setMainImage(e.target)
            e.target.classList.add('active')
        }

    }

}

const nature = new Gallery(getElement('.nature'))
const city = new Gallery(getElement('.city'))