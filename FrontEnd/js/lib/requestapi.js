import Display from "./display.js";

async function getData(endpoint){
    try {
        let response = await fetch(`${endpoint}`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error.error)
    }
}

async function postData(endpoint, data, type, token){
    if (type === "JSON"){
        try{
            let response = await fetch(`${endpoint}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        })
        if(response.status === 401) {
            console.log("User Session Expired")
            Display.displaySessionExpired();
        }
        return response.json()
        } catch(error){
            console.log(error)
        }
    } else if (type === "FORM"){
        try{
            let response = await fetch(`${endpoint}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {   
                "Authorization": `Bearer ${token}`
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: data
        })
        if(response.status === 401) {
            console.log("User Session Expired")
            Display.displaySessionExpired();
        }
        return response.json()
        } catch(error){
            console.log(error)
        }
    }
}

async function deleteWork(endpoint, id, token){
    try{
        let response = await fetch(`${endpoint}/${id}`, {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                "id": id
            })
        })
            if(response.status === 401) {
                console.log("User Session Expired")
                Display.displaySessionExpired();
            }
            return response.json()
    } catch(error){
        console.log(error.error)
    }
}

export default {
    getData,
    postData,
    deleteWork
}