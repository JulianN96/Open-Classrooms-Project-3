import Display from './lib/display.js'
import Requestapi from './lib/requestapi.js'
import Modal from './lib/modal.js';

//Global function to interact with API

// function makeRequest (verb, url, data){
//     return new Promise((resolve, reject) =>{
        
//         //Error handlers
//         if(verb === "POST" && !data){
//             reject({error: "No data object provided for POST request"})
//         }
//         if (verb !== "POST" && verb !== "GET"){
//             reject({Error: "Invalid request verb"})
//         }
        
//         //main function
//         let request = new XMLHttpRequest()
//         request.open(verb, url)
//         request.onreadystatechange = () => {
//             if(request.readyState === 4){
//                 if(request.status === 200 || request.status === 201){
//                     resolve(JSON.parse(request.response))
//                 } else {
//                     reject(JSON.parse(request.response))
//                 }
//             }  
//         }

//         if (verb === "POST"){
//             request.setRequestHeader("Content-Type", "application/json")
//             request.send(JSON.stringify(data))
//         } else {
//             request.send()
//         }
//         })
// }

//Get works function

async function getWorks(worksData, galleryId){
    
    const gallery = document.getElementsByClassName(`${galleryId}`)
    if (galleryId == "gallery"){
        Display.displayWorks(worksData);
    } 
    // if (galleryId == "modifyModal__gallery"){
    //     try{
    //         const worksData = await makeRequest("GET", api + "/works")
    //         for (work of worksData){
    //             gallery[0].innerHTML += `
    //             <figure class="work category${work.categoryId}">
    //                 <div class="modifyModal__workContainer">
    //                     <img src="${work.imageUrl}" alt="${work.title}">
    //                     <div class="modifyModal__figureDelete">
    //                         <svg class="modifyModal__figureTrash" xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 9 11" fill="none">
    //                             <path d="M2.71607 0.35558C2.82455 0.136607 3.04754 0 3.29063 0H5.70938C5.95246 0 6.17545 0.136607 6.28393 0.35558L6.42857 0.642857H8.35714C8.71272 0.642857 9 0.930134 9 1.28571C9 1.64129 8.71272 1.92857 8.35714 1.92857H0.642857C0.287277 1.92857 0 1.64129 0 1.28571C0 0.930134 0.287277 0.642857 0.642857 0.642857H2.57143L2.71607 0.35558ZM0.642857 2.57143H8.35714V9C8.35714 9.70915 7.78058 10.2857 7.07143 10.2857H1.92857C1.21942 10.2857 0.642857 9.70915 0.642857 9V2.57143ZM2.57143 3.85714C2.39464 3.85714 2.25 4.00179 2.25 4.17857V8.67857C2.25 8.85536 2.39464 9 2.57143 9C2.74821 9 2.89286 8.85536 2.89286 8.67857V4.17857C2.89286 4.00179 2.74821 3.85714 2.57143 3.85714ZM4.5 3.85714C4.32321 3.85714 4.17857 4.00179 4.17857 4.17857V8.67857C4.17857 8.85536 4.32321 9 4.5 9C4.67679 9 4.82143 8.85536 4.82143 8.67857V4.17857C4.82143 4.00179 4.67679 3.85714 4.5 3.85714ZM6.42857 3.85714C6.25179 3.85714 6.10714 4.00179 6.10714 4.17857V8.67857C6.10714 8.85536 6.25179 9 6.42857 9C6.60536 9 6.75 8.85536 6.75 8.67857V4.17857C6.75 4.00179 6.60536 3.85714 6.42857 3.85714Z" fill="white"/>
    //                         </svg>
    //                     </div>
    //                     <figcaption>éditer</figcaption>
    //                 </div>
    //             </figure>
    //             `
    //         }
    //     } catch(error){
    //         console.log(error)
    //     }
    // }
}

// //Login Function
// async function loginUsers(){

//     const api = "http://localhost:5678/api"
//     const loginUser = document.getElementById("login__form-email")
//     const loginPassword = document.getElementById("login__form-password")
//     const loginButton = document.getElementById("loginButton")
//     const errorMessage = document.getElementById("login__form--errorMessage")

//     try{
//         console.log(loginUser.value)
//         const loginPromise = makeRequest("POST", api + "/users/login", {
//             "email": loginUser.value,
//             "password": loginPassword.value
//         })
//         try{
//             const loginResponse = await loginPromise;
//             if(loginResponse.userId === 1){
//                 console.log("Logged in")
//                 window.location = "index.html"
//                 // activateEditMode();
//             }
//         }
//         catch(error){
//             console.log("Login Failed" + error.error)
//             errorMessage.style.display = "block"
//             loginUser.classList.add("login__form--incorrect")
//             loginPassword.classList.add("login__form--incorrect")
//         }
//     }
    
//      catch(error){
//         console.log(error)
//     }
// }


//Activate Edit Mode Functions

function activateEditMode(){
    let editModeItems = document.getElementsByClassName("editMode--hidden")
    for (editItem of editModeItems){
        editItem.classList.remove("editMode--hidden")
        editItem.classList.add("editMode--active")
    }
}

//Modal Functions

// function displayAddModal(){
//     let modifyModalContent = document.querySelector(".modifyModal__content")
//     modifyModalContent.innerHTML = `
//         <div class="modifyModal__topIcons">
//             <svg class="modifyModal__back" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
//                 <path d="M0.439478 8.94458C-0.146493 9.53055 -0.146493 10.4822 0.439478 11.0681L7.9399 18.5686C8.52587 19.1545 9.47748 19.1545 10.0635 18.5686C10.6494 17.9826 10.6494 17.031 10.0635 16.445L5.11786 11.5041H19.4999C20.3297 11.5041 21 10.8338 21 10.004C21 9.17428 20.3297 8.50393 19.4999 8.50393H5.12255L10.0588 3.56303C10.6447 2.97706 10.6447 2.02545 10.0588 1.43948C9.47279 0.853507 8.52118 0.853507 7.93521 1.43948L0.43479 8.9399L0.439478 8.94458Z" fill="black"/>
//             </svg>
//             <svg class="modifyModal__close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <path d="M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z" fill="black"/>
//             </svg>
//         </div>
//         <h2 class="modifyModal__imageAddTitle">Ajout photo</h2>
//         <div class="modifyModal__imageAddContainer">
//             <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
//                 <path d="M57 6H1C0.448 6 0 6.447 0 7V51C0 51.553 0.448 52 1 52H57C57.552 52 58 51.553 58 51V7C58 6.447 57.552 6 57 6ZM56 50H2V8H56V50Z" fill="#B9C5CC"/>
//                 <path d="M16 28.138C19.071 28.138 21.569 25.64 21.569 22.57C21.569 19.498 19.071 17 16 17C12.929 17 10.431 19.498 10.431 22.569C10.431 25.64 12.929 28.138 16 28.138ZM16 19C17.968 19 19.569 20.602 19.569 22.569C19.569 24.536 17.968 26.138 16 26.138C14.032 26.138 12.431 24.537 12.431 22.57C12.431 20.603 14.032 19 16 19Z" fill="#B9C5CC"/>
//                 <path d="M7.00004 46C7.23404 46 7.47004 45.918 7.66004 45.751L23.973 31.389L34.275 41.69C34.666 42.081 35.298 42.081 35.689 41.69C36.08 41.299 36.08 40.667 35.689 40.276L30.882 35.469L40.063 25.415L51.324 35.738C51.731 36.111 52.364 36.083 52.737 35.676C53.11 35.269 53.083 34.636 52.675 34.263L40.675 23.263C40.479 23.084 40.218 22.995 39.955 23.001C39.69 23.013 39.44 23.13 39.261 23.326L29.467 34.053L24.724 29.31C24.35 28.937 23.752 28.918 23.356 29.266L6.33904 44.249C5.92404 44.614 5.88404 45.246 6.24904 45.661C6.44704 45.886 6.72304 46 7.00004 46Z" fill="#B9C5CC"/>
//             </svg>
//             <button class="modifyModal__imageAddButton">+ Ajouter photo</button>
//             <p class="modifyModal__imageAddRules">jpg, png : 4mo max</p>
//         </div>
//         <form>
//             <label for="title">Titre</label>
//             <input type="text" name="title">
//             <label for="category">Catégorie</label>
//             <input type="text" name="category">
//         </form>
//         <div class="modifyModal__formDivider></div>
//         <button class="modifyModal__formButton">Valider</button>
//     `
//     const closeModalButton = document.querySelector(".modifyModal__close").addEventListener("click", () => {
//         modifyModal.style.display = "none"
//     })
//     const backModalButton = document.querySelector(".modifyModal__back").addEventListener("click", () => {displayModifyModal()})
// }

async function init(){
    const token = localStorage.getItem("token")
    const loginButton = document.getElementById("loginButton")

    if (token){
        Display.displayEditMode()
    }

    let worksData = await Requestapi.getData("/works");
    const filterButtons = document.getElementsByClassName("filters__button")
    const modifyProjectsButton = document.querySelector(".modifyProject__container")
    
    //Filter Logic
    Array.from(filterButtons).forEach((button) => {
        button.addEventListener("click", (e) =>{
            if(e.target.classList.contains("filters__button--active")){
                e.target.classList.remove("filters__button--active")
                getWorks("gallery")
                filterButtons[0].classList.add("filters__button--active")
            } else if(!e.target.classList.contains("filters__button--active")){
                Array.from(filterButtons).forEach((sbutton) => {
                    sbutton.classList.remove("filters__button--active")
                });
                e.target.classList.add("filters__button--active")
                async function addFilter(){
                    Display.filterDisplay(worksData, e.target.id)
                }
                addFilter()
            }
            if(e.target.id == 0){
                getWorks(worksData, "gallery")
            }
        })
    })

    getWorks(worksData, "gallery")

    modifyProjectsButton.addEventListener("click", (e) => {
        Modal.openModifyModal(worksData);
    })

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