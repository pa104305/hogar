console.log("HelloWorld!!") //prueba de conexion
var stockVar = //Funcion para guardar datos de los productos
fetch('static/json/stock.json')
.then(stock => stock.json())
.then(stock => {stockVar = stock})//guarda toda la información obtenida de la base de datos en una variable
var item = //guarda el elemento que el usuario selecciono
fetch('static/json/variable.json')
.then(product => product.json())
.then(product => {item = product})//guarda la información del elemento seleccionado

function charge(){ //esta funcion se encarga de comparar los productos de la base de datos con el solicitado
    for(i = 0; i < stockVar.length; i++){
        if(stockVar[i][1] == item){
            var info = stockVar[i]
            dom(info)
        }else{//si el numero de intentos es igual a la cantidad de productos se indica que no se encontro el producto
            if(i == stockVar.length){
                alert("producto no encontrado")
            }
        }
    }
}

function dom(productInfo){//modifica el documento html según la información del producto
    const all = document.querySelector('html')//selecciona la pagina completa
    const title = document.querySelector('title')//selecciona el titulo de la pagina
    title.innerHTML += `${productInfo[1]}`//indica el valor del titulo de la pagina
    const info = document.querySelector('h2')//seleciona texto con formato de subtitulo
    info.innerHTML += `${productInfo[1]}`//indica el valor del subtitulo
    const id = document.querySelector('#id') //selecciona la etiqueta con id de "id"
    id.innerHTML += `${productInfo[0]}` //indica el valor del id
    const stock = document.querySelector('#stock') //selecciona el espacio con id de "stock"
    stock.innerHTML += `${productInfo[2]}`//modifica el valor del stock
    const price = document.querySelector('#price') //selecciona el espacio con id de "price"
    price.innerHTML += `${productInfo[3]}` //modifica el valor del precio
}

//? se establece un tiempo de espera para que JS pueda encontrar la información del producto seleccionado
setTimeout(() => {
    charge()
}, 500)

// TODO: Agregar la funcion correspondiente a los botones, modificando la base de datos

//? FUNCION PARA EL BOTON "VENDER"
function sell(){
    number = document.querySelector("#number").value
    alert("sell " + number)
    // TODO: Modificar el json correspondiente para escribir el numero ingresado y pasarselo a Python
    const route = '/${item}/fill/${number}'
    window.open(route, "_self")//abre una ruta en la misma pestaña para iniciar la modificacion de la DB
}

//? FUNCION PARA EL BOTON "SURTIR"
function fill(){
    number = document.querySelector("#number").value
    alert("fill " + number)
    // TODO: Modificar el json correspondiente para escribir el numero ingresado y pasarselo a Python
    window.open('/' + item + '/fill', "_self")//abre una ruta en la misma pestaña para iniciar la modificacion de la DB
}