import { displayWorks, displayCategory, btnModifier, buttonLogout  } from "./display.js"

import { fetchWork, fetchCategory } from "./api.js"
import { initModal } from "./modale.js"
function isConnect() {
    return localStorage.getItem('token') !== null
}

const category = await fetchCategory()
const works = await fetchWork()
displayWorks(works)
if (isConnect()) {
    buttonLogout()
    btnModifier()
    initModal(works, category)
    document.querySelector('.mode-edition').style.display = "flex"
} else {
    displayCategory(category, works)
}






















