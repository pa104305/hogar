console.log("helloWorld!!!")
// funcion para buscar productos
function products(){
    // se extrae el nombre del producto desde un input
    productName = document.querySelector("#productName").value
    // se llama una funcion y le pasa la variable anterior
    productSearch(productName)
}

// esta funcion busca un producto y modifica la tabla
function productSearch(product){
    // cuenta la cantidad de lineas
    var route = document.querySelectorAll('#line').length;
    // genera una constante de la longitud de productos
    const len = stockVar.length
    //inicia un bucle para llevar a la busqueda del producto buscado
    for(i = 0; i < len; i++){
        //variable que cambia su valor conforme se inicia un nuevo ciclo en el bucle
        var position = stockVar[i][1]
        //compara el nombre del producto actual con el producto buscado
        if(position == product){
            //bucle que se encarga de remover las lineas de la tabla
            for(x = 0; x < route; x++){
                const remove = document.querySelector('#line');
                remove.parentNode.removeChild(remove)
            }
            //crea una nueva linea con la informacion del producto buscado
            const table = document.createElement('tr');
            table.setAttribute("id", "line")
            table.innerHTML += `
                <th id="item-id">${stockVar[i][0]}</th>
                <td id="item"><a href="/${stockVar[i][1]}"><div id="box">${stockVar[i][1]}</div></a></td>
                <td id="item">${stockVar[i][2]}</td>
                <td id="item">${stockVar[i][3]}</td>
        `;
        //agrega esta informacion generada a la tabla
        space.appendChild(table)
        }
    }
}

//selecciona el espacio donde se modificara la informacion
const space = document.querySelector('#space')
//crea un nuevo elemento
const table = document.createElement('tr');
//genera la estructura de la tabla
var stockVar = 
table.innerHTML += `
<th id="item-title">ID</th>
<th id="item-title">PRODUCTO</th>
<th id="item-title">STOCK</th>
<th id="item-title">PRECIO</th>
`;
//se adjunta esta estructura a la tabla
space.appendChild(table)

//se extrae y adjunta la informacion de la base de datos a la pagina web
fetch('static/json/stock.json')
.then(stock => stock.json())
.then(stock => {
    stock.forEach(product => {
        if(product[2] != 0){
            const table = document.createElement('tr');
            stockVar = stock
            table.setAttribute("id", "line")
            table.innerHTML += `
                <th id="item-id">${product[0]}</th>
                <td id="item"><a href="/${product[1]}"><div id="box">${product[1]}</div></a></td>
                <td id="item">${product[2]}</td>
                <td id="item">${product[3]}</td>
            `;
            space.appendChild(table)
        }
    })
})
