import { genererTraveaux } from "./test.js";

 function isConnect() {
    return localStorage.getItem('token') !== null;
}

function buttonLogout() {

    let btnLogOut = "Logout";
    let btnDeconnexion = document.createElement("li");
    btnDeconnexion.textContent = btnLogOut;

    btnDeconnexion.classList.add("logout"); 

    let nav = document.querySelector("nav ul");

    let dernierLi = nav.querySelector("li:last-child");

    nav.insertBefore(btnDeconnexion, dernierLi);
}

//Récupération des des projets depuis l'API
fetch('http://localhost:5678/api/works/')
    .then(response => {
        return response.json();
    })
    .then(travauxData => {
        const travaux = travauxData;
        genererTraveaux(travaux);

        fetch('http://localhost:5678/api/categories/')
            .then(response => {
                return response.json()
            })

            .then(categoriesData => {
                const categories = categoriesData;

                const divCategory = document.querySelector(".category");

                const btnAllCategory = document.createElement("button")
                btnAllCategory.classList.add("allCategory")
                const btnContent = "Tous"
                btnAllCategory.textContent = btnContent
                divCategory.appendChild(btnAllCategory)

                for (let i = 0; i < categories.length; i++) {
                    const category = categories[i];

                    const categoriesElement = document.createElement("button");
                    categoriesElement.innerText = category.name;

                    categoriesElement.addEventListener("click", () => {
                        //Filtrer les travaux en fonction de la catégorie sélectionnée
                        const travauxFiltres = travaux.filter(works => works.categoryId === category.id);
                        
                        //Effacer les travaux actuels
                        const sectionTravaux = document.querySelector(".gallery");
                        sectionTravaux.innerHTML = "";

                        genererTraveaux(travauxFiltres);
                    });

                    divCategory.appendChild(categoriesElement);
                }
                const allCatgory = document.querySelector(".allCategory")
                allCatgory.addEventListener("click",() => {
                    const sectionTravaux = document.querySelector(".gallery");
                    sectionTravaux.innerHTML = "";
                    genererTraveaux(travaux)
                })
            });
    });


if (isConnect()) {
    const btnLogin = document.getElementById("btn-login");
    btnLogin.innerHTML = "";

    buttonLogout()


}

const monBtnLogOut = document.querySelector(".logout")
monBtnLogOut.addEventListener("click", () => {
    localStorage.removeItem('token');

    window.location.href = 'index.html'

    //genererTraveaux(travaux)

})