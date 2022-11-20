console.log("HelloWorld!!")
var stockVar = 
fetch('static/json/stock.json')
.then(stock => stock.json())
.then(stock => {
    stock.forEach(element => {
        stockVar = stock
        //console.log(element)
    })
})
var item =
fetch('static/json/variable.json')
.then(product => product.json())
.then(product => {item = product})

function charge(){
    var count = 0
    for(i = 0; i < stockVar.length; i++){
        if(stockVar[i][1] == item){
            var info = stockVar[i]
            dom(info)
        }else{
            count++
            if(count == stockVar.length){
                alert("producto no encontrado")
            }
        }
    }
}

function dom(productInfo){
    const all = document.querySelector('html')
    const title = document.querySelector('title')
    title.innerHTML += `${productInfo[1]}`
    all.appendChild(title)
    const space = document.querySelector('#modify')
    const info = document.querySelector('h2')
    info.innerHTML += `${productInfo[1]}`
    const id = document.querySelector('#id')
    id.innerHTML += `${productInfo[0]}`
    const stock = document.querySelector('#stock')
    stock.innerHTML += `${productInfo[2]}`
    const price = document.querySelector('#price')
    price.innerHTML += `${productInfo[3]}`
}

setTimeout(() => {
    charge()
}, 300)

// TODO: Agregar la funcion correspondiente a los botones, modificando la base de datos
//* Modificar el archivo json, para posteriormente comparar la informacion del json con la información de la db, si es diferente modifica la db