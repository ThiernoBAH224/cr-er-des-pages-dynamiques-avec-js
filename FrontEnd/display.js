
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

export function displayCategory(category) {
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
        
        divCategory.appendChild(categoriesElement);
        
    }
}

export function buttonLogout() {
    const btnLogin = document.getElementById("btn-login");
    btnLogin.innerHTML = "";
    let btnLogOut = "Logout";
    let btnDeconnexion = document.createElement("li");
    btnDeconnexion.textContent = btnLogOut;

    btnDeconnexion.classList.add("logout"); 

    let nav = document.querySelector("nav ul");

    let dernierLi = nav.querySelector("li:last-child");

    nav.insertBefore(btnDeconnexion, dernierLi);

    const monBtnLogOut = document.querySelector(".logout")
    monBtnLogOut.addEventListener("click", () => {
        localStorage.removeItem("token")
        window.location.href = "index.html"
    })
}


export function filterCategory(works, category) {
    const categoriesElement = document.querySelector(".button");
    categoriesElement.innerText = category.name;
    categoriesElement.addEventListener("click", () => {
        const categoryFilter = works.filter(work => work.categoryId === category.id);
        displayWorks(categoryFilter);
    });
}

export function btnModifier() {
    const boutonModifier = document.createElement('button');
    boutonModifier.textContent = 'modifier';
    boutonModifier.classList.add('btn-modifier');
    document.querySelector('.modify').appendChild(boutonModifier);
}


