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
        const currentWork = works[i]; 
        const sectionTravaux = document.querySelector(".image-and-delete");
        const container = document.createElement("div"); 
        const imageWorks = document.createElement("img");
        const deleteIcon = document.createElement("i");
        container.classList.add("container-img-icone");
        deleteIcon.className = "fa-solid fa-trash-can";
        deleteIcon.dataset.workId = currentWork.id; 
        
        imageWorks.src = currentWork.imageUrl;
        
        container.appendChild(imageWorks); 
        container.appendChild(deleteIcon); 
        sectionTravaux.appendChild(container); 
    }
}

function generateOptions(categories) {
    const selectElement = document.getElementById("categorie");

    categories.forEach(categorie => {
        const option = new Option(categorie.name, categorie.id);
        selectElement.add(option);
    });
}

function addWorks() {
    document.getElementById("formulaire-image").addEventListener("submit", async (event) => {
        event.preventDefault();
        const form = document.getElementById("formulaire-image");
        const formData = new FormData(form);
        try {
            const response = await fetch('http://localhost:5678/api/works/', {
                method: 'POST',
                headers: {
                    authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: formData 
            });
            if (!response.ok) {
                throw new Error('Une erreur s\'est produite lors de l\'envoi des données.');
            }
            const responseData = await response.json();
            //console.log(responseData);
        } catch (error) {
            console.error('Erreur:', error);
        }
    });
}

function deleteWork() {
    const trashList = document.querySelectorAll('.fa-trash-can');
    for (let i = 0; i < trashList.length; i++) {
        const trash = trashList[i];
        trash.addEventListener('click', async () => {
            const workId = trash.getAttribute('data-work-id');
            try {
                const response = await fetch(`http://localhost:5678/api/works/${workId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': "Bearer " + localStorage.getItem("token"),
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('La suppression a échoué');
                } else {
                    trash.parentNode.remove(); 
                }
            } catch (error) {
                console.error('Erreur de suppression:', error.message);
            }
        });
    }
}



//http://192.168.1.14:3000/




export function initModal(works, category) {
    openModale()
    closeModal()
    openModaleAddImg()
    closeModalAddImg()
    returnModalOne()
    imageModal(works)
    generateOptions(category)
    addWorks()
    deleteWork()
}
