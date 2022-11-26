console.log("helloWorld!!!")

function products(){
    productName = document.querySelector("#productName").value
    productSearch(productName)
}

function productSearch(product){
    var route = document.querySelectorAll('#line').length;
    console.log(route)
    const len = stockVar.length
    for(i = 0; i < len; i++){
        var position = stockVar[i][1]
        if(position == product){
            //console.log(stockVar[i])
            for(x = 0; x < route; x++){
                const remove = document.querySelector('#line');
                remove.parentNode.removeChild(remove)
            }
            const table = document.createElement('tr');
            table.setAttribute("id", "line")
            table.innerHTML += `
                <th id="item-id">${stockVar[i][0]}</th>
                <td id="item"><a href="/${stockVar[i][1]}"><div id="box">${stockVar[i][1]}</div></a></td>
                <td id="item">${stockVar[i][2]}</td>
                <td id="item">${stockVar[i][3]}</td>
        `;
        //<th id="item-id">${stockVar[i][0]}</th>
        //<td id="item">${stockVar[i][1]}</td>
        //<td id="item">${stockVar[i][2]}</td>
        //<td id="item">${stockVar[i][3]}</td>
        space.appendChild(table)
        }
    }
    //var info = 0
    //fetch('static/json/stock.json')
    //.then(respuesta => respuesta.json())
    //.then(data => {
    //    var count = 0;
    //    const len = data.length
    //    data.forEach(date => {
    //        const items = document.querySelector('#line')
    //        if(product == date[1]){
    //            const table = document.createElement('tr');
    //            table.setAttribute("id", "line")
    //            table.innerHTML += `
    //                <th>${date[0]}</th>
    //                <td>${date[1]}</td>
    //                <td>${date[2]}</td>
    //                <td>${date[3]}</td>
    //            `;
    //            space.appendChild(table)
    //        }else{
    //            count += 1
    //            if(count == len){
    //                alert("Producto no encotrado")
    //                location.reload()
    //            }
    //        }
    //    });
    //})
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

