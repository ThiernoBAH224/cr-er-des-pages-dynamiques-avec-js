import { displayWorks, displayCategory, btnModifier, buttonLogout  } from "./display.js";

import { fetchWork, fetchCategory } from "./api.js";

//import { filterCategory } from "./display.js";

import { initModal } from "./modale.js";

function isConnect() {
    return localStorage.getItem('token') !== null;
}


const category = await fetchCategory()
const works = await fetchWork()

//console.log(category)


// const imageWork = works.map(work => work.imageUrl)


displayWorks(works)
//filterCategory(works)

// const categoriesElements = document.querySelectorAll(".category button");
// console.log(categoriesElements)

// for (let i = 0; i < categoriesElements.length; i++) {
//     const category = categoriesElements[i];
//     console.log(category); 
    
//     category.addEventListener("click", async () => {
//         const travauxFiltres = works.filter(work => work.categoryId === category.id);
//         console.log(travauxFiltres)
//         const sectionTravaux = document.querySelector(".gallery");
//         sectionTravaux.innerHTML = "";
//         displayWorks(travauxFiltres);
//     });
// }





if (isConnect()) {
    buttonLogout()
    btnModifier()
    initModal(works, category)
    document.querySelector('.mode-edition').style.display = "flex"
    
} else {
    displayCategory(category)
}























// console.log("gvj")
// const categoriesElements = document.querySelectorAll("button");

// categoriesElements.forEach(categoriesElement => {
// categoriesElement.addEventListener("click", () => {
// // Le code à exécuter lorsqu'un bouton est cliqué

// const workFiltrer = works.filter(work => work.categoryId === category.id);
// const sectionTravaux = document.querySelector(".gallery");
// sectionTravaux.innerHTML = "";
// displayWorks(workFiltrer);
// });
// });



// Appeler la fonction handleClick



// const filteredWorks = works.filter(function(work) {
//return work.category.name === "Objets";
// });











//Récupération des des projets depuis l'API
// fetch('http://localhost:5678/api/works/')
// .then(response => {
//     return response.json();
// })
// .then(travauxData => {
//     const travaux = travauxData;
//     genererTraveaux(travaux);

//     fetch('http://localhost:5678/api/categories/')
//         .then(response => {
//             return response.json()
//         })

//         .then(categoriesData => {
//             const categories = categoriesData;

//             const divCategory = document.querySelector(".category");

//             const btnAllCategory = document.createElement("button")
//             btnAllCategory.classList.add("allCategory")
//             const btnContent = "Tous"
//             btnAllCategory.textContent = btnContent
//             divCategory.appendChild(btnAllCategory)

//             for (let i = 0; i < categories.length; i++) {
// const category = categories[i];

// const categoriesElement = document.createElement("button");
// categoriesElement.innerText = category.name;

// categoriesElement.addEventListener("click", () => {
// const travauxFiltres = travaux.filter(works => works.categoryId ===category.id);
                        
// const sectionTravaux = document.querySelector(".gallery");
// sectionTravaux.innerHTML = "";

// genererTraveaux(travauxFiltres);
// });

// divCategory.appendChild(categoriesElement);
            // }
            // const allCatgory = document.querySelector(".allCategory")
            // allCatgory.addEventListener("click",() => {
// const sectionTravaux = document.querySelector(".gallery");
// sectionTravaux.innerHTML = "";
// genererTraveaux(travaux)
            //})
        //});
//});


// if (isConnect()) {
// const btnLogin = document.getElementById("btn-login");
// btnLogin.innerHTML = "";

//buttonLogout()

// }




// })