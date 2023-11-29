
// Récupération des des projets depuis l'API
fetch('http://localhost:5678/api/works/')
    .then(response => {
        return response.json();
    })
    .then(travauxData => {
        const travaux = travauxData;
        function genererTraveaux(travaux) {
            for (let i = 0; i < travaux.length; i++) {
                const works = travaux[i];

                // Récupération de l'élément du DOM qui accueillera les travaux
                const sectionTravaux = document.querySelector(".gallery");

                const figureWorks = document.createElement("figure");
                const imageWorks = document.createElement("img");
                imageWorks.src = works.imageUrl;
                const legendeFigure = document.createElement("figcaption");
                legendeFigure.innerText = works.title;

                sectionTravaux.appendChild(figureWorks);
                figureWorks.appendChild(imageWorks);
                figureWorks.appendChild(legendeFigure);
            }
        }

        genererTraveaux(travaux);

        fetch('http://localhost:5678/api/categories/')
            .then(response => {
                return response.json()
            })

            .then(categoriesData => {
                const categories = categoriesData;

                const divCategory = document.querySelector(".category");

                for (let i = 0; i < categories.length; i++) {
                    const category = categories[i];

                    const categoriesElement = document.createElement("button");
                    categoriesElement.innerText = category.name;

                    // Ajouter un écouteur d'événement click à chaque bouton de catégorie
                    categoriesElement.addEventListener("click", () => {
                        //console.log(`Bouton ${category.name} cliqué!`);
                        // Filtrer les travaux en fonction de la catégorie sélectionnée
                        const travauxFiltres = travaux.filter(works => works.categoryId === category.id);
                        
                        // Effacer les travaux actuels
                        const sectionTravaux = document.querySelector(".gallery");
                        sectionTravaux.innerHTML = "";

                        // Générer les travaux filtrés
                        genererTraveaux(travauxFiltres);
                    });

                    divCategory.appendChild(categoriesElement);
                }
                const allCatgory = document.getElementById("allCategory")
                allCatgory.addEventListener("click",() => {
                    const sectionTravaux = document.querySelector(".gallery");
                    sectionTravaux.innerHTML = "";
                    genererTraveaux(travaux)
                })
            });
    });













