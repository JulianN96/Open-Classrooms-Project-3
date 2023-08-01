import Display from "./display.js";
import Requestapi from "./requestapi.js";

async function openModifyModal(){
    let worksData = await Requestapi.getData("/works")
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
    
}

function openAddModal(){
    Display.displayAddModal();
    const closeModalButton = document.querySelector(".modifyModal__close").addEventListener("click", () => {
        modifyModal.style.display = "none"
    })
    const backModalButton = document.querySelector(".modifyModal__back").addEventListener("click", () => {openModifyModal()})
}

export default{
    openModifyModal
}