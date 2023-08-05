import Display from "./display.js";
import Requestapi from "./requestapi.js";

async function openModifyModal(worksData){
    Display.displayModifyModal(worksData)

    let addButton = document.querySelector(".modifyModal__button")
    const closeModalButton = document.querySelector(".modifyModal__close").addEventListener("click", () => {
        modifyModal.style.display = "none"
    })

    addButton.addEventListener("click", () => {
        openAddModal();
    })

    window.onclick = function(event){
        if(event.target == modifyModal) {
            modifyModal.style.display = "none"
        }
    }

    let deleteWorkButtonArray = document.getElementsByClassName("modifyModal__figureDelete")
    Array.from(deleteWorkButtonArray).forEach((deleteButton) => {
        deleteButton.addEventListener("click", (e) => {
            Requestapi.deleteWork("/works", deleteButton.id, localStorage.token)
        })
    })
}

function openAddModal(){
    Display.displayAddModal();
    const closeModalButton = document.querySelector(".modifyModal__close").addEventListener("click", () => {
        modifyModal.style.display = "none"
    })
    const backModalButton = document.querySelector(".modifyModal__back").addEventListener("click", () => {openModifyModal()})
    const addForm = document.querySelector(".modifyModal__form")
    addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addNewWork()
    })
}

function addNewWork(){
    const newImage = document.querySelector(".modifyModal__imageAddContainer")
    const newTitle = document.querySelector(".addModal__title")
    const newCategory = document.querySelector(".addModal__category")

    let newWork = {
        "image": newImage.value,
        "title": newTitle.value,
        "category": +newCategory.value
    }

    console.log(newWork)
    Requestapi.postData("/works", newWork, localStorage.token)
}

export default{
    openModifyModal
}