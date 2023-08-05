async function getData(endpoint){
    try {
        let response = await fetch(`http://localhost:5678/api${endpoint}`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error.error)
    }
}

async function postData(endpoint, data, token){
    try{
        let response = await fetch(`http://localhost:5678/api${endpoint}`, {
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
        return response.json()
    } catch(error){
        console.log(error)
    }
}

async function deleteWork(endpoint, id, token){
    console.log(token)
    try{
        let response = await fetch(`http://localhost:5678/api${endpoint}/${id}`, {
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
            return response.json()
    } catch(error){
        console.log("Error:" + error.error)
    }
}

export default {
    getData,
    postData,
    deleteWork
}