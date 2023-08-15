

const url = "https://api.disneyapi.dev/character"
function getUser(){
    axios.get(url)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
} 

getUser()