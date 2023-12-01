export function genererTraveaux(travaux) {
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