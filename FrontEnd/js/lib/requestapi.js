async function getData(endpoint){
    try {
        let response = await fetch(`http://localhost:5678/api${endpoint}`)
        let data = response.json()
        return data
    } catch (error) {
        console.log(error.error)
    }
}

export default {
    getData
}