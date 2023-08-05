import Requestapi from "./lib/requestapi.js"

//Login Function
async function loginUsers(){

    const loginUser = document.getElementById("login__form-email")
    const loginPassword = document.getElementById("login__form-password")
    const loginButton = document.getElementById("loginButton")
    const errorMessage = document.getElementById("login__form--errorMessage")

    try{
        const loginResponse = await Requestapi.postData("/users/login", {
            "email": loginUser.value,
            "password": loginPassword.value
        })
        if(loginResponse.userId === 1){
            window.location = "index.html"
            localStorage.setItem("token", loginResponse.token)
            // activateEditMode();
        } else if (loginResponse.userId !== 1){
            errorMessage.style.display = "block"
            loginUser.classList.add("login__form--incorrect")
            loginPassword.classList.add("login__form--incorrect")
        }
    }

    catch(error){
        console.log("Login Failed" + error.error)
        errorMessage.style.display = "block"
        loginUser.classList.add("login__form--incorrect")
        loginPassword.classList.add("login__form--incorrect")
    }
}

function init(){
    const loginForm = document.getElementById("login__form")
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        loginUsers();
    })
}

init();