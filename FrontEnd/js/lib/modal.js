import Display from './display.js';
import Requestapi from './requestapi.js';

async function openModifyModal(worksData){
    Display.displayModifyModal(worksData)

    let addButton = document.querySelector('.modifyModal__button')
    const closeModalButton = document.querySelector('.modifyModal__close').addEventListener('click', () => {
        closeModal();
    })

    addButton.addEventListener('click', () => {
        openAddModal(worksData);
    })

    window.onclick = function(event){
        if(event.target == modifyModal) {
            closeModal();
        }
    }

    let deleteWorkButtonArray = document.getElementsByClassName('modifyModal__figureDelete')
    Array.from(deleteWorkButtonArray).forEach((deleteButton) => {
        deleteButton.addEventListener('click', (e) => {
            Requestapi.deleteWork('http://localhost:5678/api/works', deleteButton.id, localStorage.token)
        })
    })
}

function openAddModal(worksData){
    Display.displayAddModal();
    const closeModalButton = document.querySelector('.modifyModal__close').addEventListener('click', () => {
        closeModal();
    })
    const backModalButton = document.querySelector('.modifyModal__back').addEventListener('click', () => {openModifyModal(worksData)})
    const addForm = document.querySelector('.modifyModal__form')
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNewWork();
    })

    const addModalField = document.getElementsByClassName('addModalField')
    const addButton = document.querySelector('.modifyModal__formButton')

    Array.from(addModalField).forEach((field) => {
        field.addEventListener('input', () => {
            if(addModalField[0].value && addModalField[1].value && addModalField[2].value){
                addButton.removeAttribute('disabled')
            } else (
                addButton.setAttribute('disabled', 'true')
            )
        })
    })
}

function addNewWork(){

    const addForm = document.querySelector('.modifyModal__form')

    const formData = new FormData(addForm)
    const values = [...formData.entries()]

    console.log(values);
    Requestapi.postData('http://localhost:5678/api/works', formData, "FORM", localStorage.token);
}

function closeModal(){
    modifyModal.style.display = 'none';
    const body = document.querySelector("body").classList.remove('noOverflow');
}


export default{
    openModifyModal
}