fetch ("objeto.json")
    .then (response => response.json())
    .then(data=>{
    console.log(data)
    document.querySelector("#test").innerText = data.nombre
})