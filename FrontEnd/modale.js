function openModale() {
    const modif = document.querySelector(".btn-modifier")
    modif.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "flex"
    })
}

function openModaleAddImg() {
    const modif = document.querySelector(".btn-add-image")
    modif.addEventListener("click", () => {
        document.querySelector(".modal-add-image ").style.visibility = "visible"
    })
}


function closeModal() {
    const close = document.querySelector(".close-modal")
    close.addEventListener("click", () => {
        document.querySelector(".modal").style.display = "none"
    })
}

function closeModalAddImg() {
    const close = document.querySelector(".close-modal-add-img")
    close.addEventListener("click", () => {
        document.querySelector(".modal-add-image").style.visibility = "hidden"
    })
}

function returnModalOne() {
    const close = document.querySelector(".retur-modal-one")
    close.addEventListener("click", () => {
        document.querySelector(".modal-add-image").style.visibility = "hidden"
    })
}

function imageModal(works) {
    for(let i = 0; i < works.length; i++) {
        const currentImage = works[i]; 
        const sectionTravaux = document.querySelector(".image-and-delete");
        const imageWorks = document.createElement("img");
        imageWorks.src = currentImage.imageUrl;
        const iconeDelete = document.createElement("i");
        iconeDelete.classList.add("fa-solid", "fa-trash-can");
        sectionTravaux.appendChild(imageWorks);
        sectionTravaux.appendChild(iconeDelete);
    }
}

export function initModal(works) {
    openModale()
    closeModal()
    openModaleAddImg()
    closeModalAddImg()
    returnModalOne()
    imageModal(works)
}
