console.log("holaMundo!!!")
//function add(){
//    addProductName = document.querySelector("#addProductName").value
//    quantityProductName = document.querySelector("#quantityProductName").value
//}

function comprobate_stock(){
    const len = stockVar.length
    if(stockVar[2] === 0){
        //alert(stockVar[1] + " sin stock")
        const table = document.createElement('tr');
        table.setAttribute("id", "line")
        table.innerHTML += `
            <th id="item-id">${stockVar[0]}</th>
            <td id="item"><a href="/${stockVar[1]}"><div id="box">${stockVar[1]}</div></a></td>
            <td id="item">${stockVar[2]}</td>
            <td id="item">${stockVar[3]}</td>
        `;
        space.appendChild(table)
    }
}

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

fetch('static/json/stock.json')
.then(stock => stock.json())
.then(stock => {
    stock.forEach(product => {
        stockVar = product
        comprobate_stock()
    })
})
