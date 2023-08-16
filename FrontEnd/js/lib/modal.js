import Display from './display.js';
import Requestapi from './requestapi.js';
import Index from '../index.js';

async function openModifyModal(worksData){
    Display.displayModifyModal(worksData)
    modifyListeners(worksData)
}

async function modifyListeners(worksData){
    let addButton = document.querySelector('.modifyModal__button')
    const closeModalButton = document.querySelector('.modifyModal__close').addEventListener('click', () => {
        closeModal(worksData);
    })

    addButton.addEventListener('click', () => {
        openAddModal(worksData);
    })

    window.onclick = function(event){
        if(event.target == modifyModal) {
            closeModal(worksData);
        }
    }

    let deleteWorkButtonArray = document.getElementsByClassName('modifyModal__figureDelete')
    Array.from(deleteWorkButtonArray).forEach((deleteButton) => {
        deleteButton.addEventListener('click', (e) => {
            Requestapi.deleteWork('http://localhost:5678/api/works', deleteButton.id, localStorage.token)
            console.log(e.target.parentNode.id)
            Array.from(worksData).forEach((work, i) => {
                console.log(work.id)
                if (work.id == e.target.parentNode.id){
                    console.log("identified", i);
                    worksData.splice(i, 1);
                    openModifyModal(worksData);
                }
            })
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
        addNewWork(worksData);
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

    const addImageField = document.querySelector(".addModalInputImage")
    addImageField.addEventListener('change', () => {
        const preview = document.querySelector(".addModalInputImagePreview");
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
        const addButton = document.querySelector('.modifyModal__imageAddButton')
        const errorMessage = document.querySelector(".addModal__errorMessage")

        if(file.size > 4194304){
            console.log("file too large");
            errorMessage.innerHTML = `Erreur: Taille de l'image trop grande (Plus de 4mb)`
        } else if(file.size < 4194304){
            addButton.style.opacity = 0;
            preview.style.opacity = 100;
            errorMessage.innerHTML = ` `
            reader.onloadend = function () {
                preview.src = reader.result;
            }
            if (file) {
                reader.readAsDataURL(file);
            } else {
                preview.src = "";
            }
        }
    })
}

async function addNewWork(){

    const addForm = document.querySelector('.modifyModal__form')
    const formData = new FormData(addForm)
    const values = [...formData.entries()]
    const errorMessage = document.querySelector(".addModal__errorMessage")
    const title = document.querySelector('.addModal__title');
    const category = document.querySelector('.addModal__category');
    const image = document.querySelector('.addModalInputImage');
    if(!title.value.trim().length) {
        console.log("Only spaces present");
        errorMessage.innerHTML = `Erreur, pas de charactères valides dans le titre du projet.`;
    } else if(category > 3 || category < 1){
        console.log("Category Error");
        errorMessage.innerHTML = `Erreur, la catégorie selectioné n'est pas valide.`;
    } else if(title.value.trim().length && category){
        const newWorkData = await Requestapi.postData('http://localhost:5678/api/works', formData, "FORM", localStorage.token);
        let worksData = await Requestapi.getData('http://localhost:5678/api/works')
        console.log(worksData)
        openModifyModal(worksData)
    }
}

function closeModal(worksData){
    modifyModal.style.display = 'none';
    const body = document.querySelector("body").classList.remove('noOverflow');
    Index.filterListeners(worksData);
    Display.displayWorks(worksData);
}

export default{
    openModifyModal,
    modifyListeners
}