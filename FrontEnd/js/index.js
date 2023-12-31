import Display from './lib/display.js'
import Requestapi from './lib/requestapi.js'
import Modal from './lib/modal.js';

async function getWorks(worksData, galleryId){
    
    // const gallery = document.getElementsByClassName(`${galleryId}`)
    if (galleryId == "gallery"){
        Display.displayWorks(worksData);
    } 
}

// function activateEditMode(){
//     let editModeItems = document.getElementsByClassName("editMode--hidden")
//     for (editItem of editModeItems){
//         editItem.classList.remove("editMode--hidden")
//         editItem.classList.add("editMode--active")
//     }
// }

function filterListeners(worksData){
    const filterButtons = document.getElementsByClassName("filters__button")
    Array.from(filterButtons).forEach((button) => {
        button.addEventListener("click", (e) =>{
            if(e.target.classList.contains("filters__button--active")){
                e.target.classList.remove("filters__button--active")
                getWorks(worksData, "gallery")
                filterButtons[0].classList.add("filters__button--active")
            } else if(!e.target.classList.contains("filters__button--active")){
                Array.from(filterButtons).forEach((sbutton) => {
                    sbutton.classList.remove("filters__button--active")
                });
                e.target.classList.add("filters__button--active")
                function addFilter(){
                    Display.filterDisplay(worksData, e.target.id)
                }
                addFilter()
            }
            if(e.target.id == 0){
                getWorks(worksData, "gallery")
            }
            console.log("full run")
        })
    })
}

function modifyListener(worksData){
    const modifyProjectsButton = document.querySelector(".modifyProject__container")
    modifyProjectsButton.addEventListener("click", (e) => {
        Modal.openModifyModal(worksData);
    })
}

async function init(){
    const token = localStorage.getItem("token")
    const loginButton = document.getElementById("loginButton")

    if (token){
        Display.displayEditMode()
    }

    let worksData = await Requestapi.getData("http://localhost:5678/api/works");
    const filterButtons = document.getElementsByClassName("filters__button")
    const modifyProjectsButton = document.querySelector(".modifyProject__container")
    filterListeners(worksData);
    // //Filter Logic
    // Array.from(filterButtons).forEach((button) => {
    //     button.addEventListener("click", (e) =>{
    //         if(e.target.classList.contains("filters__button--active")){
    //             e.target.classList.remove("filters__button--active")
    //             getWorks(worksData, "gallery")
    //             filterButtons[0].classList.add("filters__button--active")
    //         } else if(!e.target.classList.contains("filters__button--active")){
    //             Array.from(filterButtons).forEach((sbutton) => {
    //                 sbutton.classList.remove("filters__button--active")
    //             });
    //             e.target.classList.add("filters__button--active")
    //             async function addFilter(){
    //                 Display.filterDisplay(worksData, e.target.id)
    //             }
    //             addFilter()
    //         }
    //         if(e.target.id == 0){
    //             getWorks(worksData, "gallery")
    //         }
    //     })
    // })

    getWorks(worksData, "gallery")

    modifyListener(worksData)

    loginButton.addEventListener("click", () => {
        if(token){
            localStorage.removeItem("token");
            window.location = "login.html";
        } else if(!token){
            window.location = "login.html";
        }
    })
}

init()

export default {
    filterListeners,
    modifyListener
}