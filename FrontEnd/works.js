// Récupération des des projets depuis l'API

fetch('http://localhost:5678/api/works/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const travaux = data;
        // Récupération de l'élément du DOM qui accueillera les travaux
        const sectionTravaux = document.querySelector(".gallery");

        for (let i = 0; i < travaux.length; i++) {
            const works = travaux[i];

            const figureWorks = document.createElement("figure");
    
            const imageWorks = document.createElement("img");
            imageWorks.src = works.imageUrl;
    
            const legendeFigure = document.createElement("figcaption");
            legendeFigure.innerText = works.title;
    
            sectionTravaux.appendChild(figureWorks);
            figureWorks.appendChild(imageWorks);
            figureWorks.appendChild(legendeFigure);
        }
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
    });

fetch('http://localhost:5678/api/categories/')
.then(response => { 
    return response.json()
})

.then(data => {
const categories = data
const listCategory = document.createElement("ol")
for(let i = 0; i < categories.length; i++) {

    const category = categories[i]

    const divCategory = document.querySelector(".category")
   
    const categoriesElement = document.createElement("li")
    categoriesElement.innerText = category.name

divCategory.appendChild(listCategory)
listCategory.appendChild(categoriesElement)

}
})




