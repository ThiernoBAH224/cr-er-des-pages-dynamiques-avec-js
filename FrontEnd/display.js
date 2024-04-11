
export function displayWorks(travaux) {
    for (let i = 0; i < travaux.length; i++) {
        const works = travaux[i];
        
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

export function displayCategory(category, works) {
    const divCategory = document.querySelector(".category");
    const btnAllCategory = document.createElement("button");
    btnAllCategory.classList.add("allCategory");
    const btnContent = "Tous";
    btnAllCategory.textContent = btnContent;
    divCategory.appendChild(btnAllCategory);
    for (let i = 0; i < category.length; i++) {
        const categories = category[i];
        const categoriesElement = document.createElement("button");
        categoriesElement.innerText = categories.name;
        const work = works
        categoriesElement.addEventListener("click", () => {
            const filterCategory = work.filter(works => works.categoryId === categories.id)
            const sectionTravaux = document.querySelector(".gallery");
            sectionTravaux.innerHTML = "";
            displayWorks(filterCategory)
        })
        const btnAllCategory = document.querySelector(".allCategory")
        btnAllCategory.addEventListener("click", () => {
            const sectionTravaux = document.querySelector(".gallery");
            sectionTravaux.innerHTML = "";
            displayWorks(work)
        })
        divCategory.appendChild(categoriesElement);
    }
}



export function buttonLogout() {
    const btnLogin = document.getElementById("btn-login");
    btnLogin.innerHTML = "";
    
    const btnLogOut = "Logout";
    const btnDeconnexion = document.createElement("li");
    btnDeconnexion.textContent = btnLogOut;
    btnDeconnexion.classList.add("logout");

    const nav = document.querySelector("ul");
    const logoLi = nav.querySelector("img").parentElement;

    nav.insertBefore(btnDeconnexion, logoLi);

    btnDeconnexion.addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.href = "index.html";
    });
}





export function btnModifier() {
    const icone = document.createElement('i');
    icone.classList.add('fa', 'fa-regular', 'fa-pen-to-square');
    const boutonModifier = document.createElement('button');
    boutonModifier.textContent = 'modifier';
    boutonModifier.classList.add('btn-modifier');
    boutonModifier.appendChild(icone); 
    document.querySelector('.modify').appendChild(boutonModifier);
}



