async function getData(endpoint){
    try {
        let response = await fetch(`http://localhost:5678/api${endpoint}`)
        let data = response.json()
        return data
    } catch (error) {
        console.log(error.error)
    }
}

async function postData(endpoint, data){
    try{
        let response = await fetch(`http://localhost:5678/api${endpoint}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data)
        })
        return response.json()
    } catch(error){
        console.log(error.error)
    }
}

export default {
    getData,
    postData
}