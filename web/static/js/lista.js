console.log("holaMundo!!!")
//funcion para comprobar el stock
function comprobate_stock(){
    const len = stockVar.length
    //se comprueba si el stock es igual a 0 se agrega a la tabla
    if(stockVar.stock === 0){
        const table = document.createElement('tr');
        table.setAttribute("id", "line")
        table.innerHTML += `
            <th id="item-id">${stockVar.id}</th>
            <td id="item"><a href="/store/${stockVar.name}"><div id="box">${stockVar.name}</div></a></td>
            <td id="item">${stockVar.stock}</td>
            <td id="item">${stockVar.price}</td>
        `;
        space.appendChild(table)
    }
}
//genera la estructura base de la tabla
const space = document.querySelector('#space')
const table = document.createElement('tr');
var stockVar =
table.innerHTML += `
<th id="item-title">ID</th>
<th id="item-title">PRODUCTO</th>
<th id="item-title">STOCK</th>
<th id="item-title">PRECIO</th>
`;
space.appendChild(table)

//extrae la informacion del archivo json
fetch('static/json/stock.json')
.then(stock => stock.json())
//itera sobre esta informacion, llamando a la funcion que comprueba el stock
.then(stock => {
    stock.forEach(product => {
        stockVar = product
        comprobate_stock()
    })
})
