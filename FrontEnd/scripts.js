const api = "http://localhost:5678/api"
let activeFilters = []

const gallery = document.getElementsByClassName("gallery")
const filterButtons = document.getElementsByClassName("filters__button")
const works = document.getElementsByClassName("work")


//Filter Logic
for (i=0; i < filterButtons.length; i++){
    filterButtons[i].addEventListener("click", (e) =>{

        if(e.target.classList.contains("filters__button--active")){
            e.target.classList.remove("filters__button--active")
            let newActiveFilters = []
            for(filter of activeFilters){
                if (filter != e.target.id){
                    newActiveFilters.push(filter)
                }
            }
            activeFilters = newActiveFilters

        } else{
            e.target.classList.add("filters__button--active")
            if (activeFilters.length > 0){
                let newActiveFilters = []
                console.log("activefilters" + activeFilters)
                newActiveFilters.push(+e.target.id)
                for (filter of activeFilters){
                    console.log("targetID " + e.target.id)
                    if(filter != +e.target.id){
                        newActiveFilters.push(filter)
                    }
                }
                activeFilters = newActiveFilters
            } else {
                activeFilters.push(+e.target.id)  
            }
            if(e.target.id == 0){  
                for (button of filterButtons){
                    button.classList.remove("filters__button--active")
                }
                activeFilters = []
            }
        } 

        //disappear logic goes here
        
        if (activeFilters.length === 0){
            for(work of works){
                work.style.display="block"
            }
        }else{
            let showWorksArray = []
            for(work of works){
                for(filter of activeFilters){
                    if(work.classList.contains(`category${filter}`)){
                        showWorksArray.push(work)
                    }else{
                        work.style.display="none"
                    }
                }
            }
            console.log(showWorksArray)
            for (showWork of showWorksArray){
                showWork.style.display="block"
            }
        }
    })
}

//Global function to interact with API

function makeRequest (verb, url, data){
    return new Promise((resolve, reject) =>{
        
        //Error handlers
        if(verb === "POST" && !data){
            reject({error: "No data object provided for POST request"})
        }
        if (verb !== "POST" && verb !== "GET"){
            reject({Error: "Invalid request verb"})
        }
        
        //main function
        let request = new XMLHttpRequest()
        request.open(verb, url)
        request.onreadystatechange = () => {
            if(request.readyState === 4){
                if(request.status === 200 || request.status === 201){
                    resolve(JSON.parse(request.response))
                } else {
                    reject(JSON.parse(request.response))
                }
            }  
        }

        if (verb === "POST"){
            request.setRequestHeader("Content-Type", "application/json")
            request.send(JSON.stringify(data))
        } else {
            request.send()
        }
        })
}


//Get works function

async function getWorks(){
    
    try{
        const worksData = await makeRequest("GET", api + "/works")
        for (work of worksData){
            gallery[0].innerHTML += `
            <figure class="work category${work.categoryId}">
                <img src="${work.imageUrl}" alt="${work.title}">
                <figcaption>${work.title}</figcaption>
            </figure>
            `
        }
    } catch(error){
        console.log(error)
    }
}

getWorks()
