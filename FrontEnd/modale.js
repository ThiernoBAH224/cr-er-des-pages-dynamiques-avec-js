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
        const container = document.createElement("div"); // Conteneur pour l'image et l'icône
        const imageWorks = document.createElement("img");
        const deleteIcon = document.createElement("i");
        container.classList.add("container-img-icone");
        // Ajout de l'icône trash-can avec l'id de l'oeuvre
        deleteIcon.className = "fa-solid fa-trash-can";
        deleteIcon.dataset.workId = currentWork.id; // Utilisation de dataset pour stocker l'id
        
        imageWorks.src = currentWork.imageUrl;
        
        container.appendChild(imageWorks); // Ajout de l'image au conteneur
        container.appendChild(deleteIcon); // Ajout de l'icône au conteneur
        sectionTravaux.appendChild(container); // Ajout du conteneur à la section principale
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
        const formDataObject = Object.fromEntries(formData);

        console.log(formDataObject)

        try {
            const response = await fetch('http://localhost:5678/api/works/', {
                method: 'POST',
                headers: {
                    authorization : "Bearer "+localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                },
                body: formData//JSON.stringify(formDataObject)
            });

            if (!response.ok) {
                throw new Error('Une erreur s\'est produite lors de l\'envoi des données.');
            }

            const responseData = await response.json();
            console.log(responseData); 

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
            console.log(workId)

            try {
                const response = await fetch('http://localhost:5678/api/works/{id}', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(workId)
                });

                if (!response.ok) {
                    throw new Error('La suppression a échoué');
                }

                const responseDelete = await response.json();
                console.log(responseDelete);
            } catch (error) {
                console.error('Erreur de suppression:', error.message);
            }
        });
    }
}





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
