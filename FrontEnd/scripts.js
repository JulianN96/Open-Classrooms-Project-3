const api = "http://localhost:5678/api"

const gallery = document.getElementsByClassName("gallery")
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
            <figure>
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
