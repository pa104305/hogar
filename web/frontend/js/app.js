import(Node)
console.log("Prueba?") //comprobar si el archivo js esta conectado a html

function log(){//funcion a la que se llama desde html cuando se hace click en el boton Ingresar
    nombre = document.querySelector("#nombre").value //variable que guarda el valor introducido en el nombre de ususario
    contraseña = document.querySelector("#contraseña").value //variable que guarda el valor introducido en la contraseña
    window.open("./html/home.html", "_self"/* "_self" sirve para que la ventana se abra en la misma pestaña */);
    //abre la ventana home al dar click en ingresar, despues sera cuando el nombre y contraseña coincidan :p
    //console.log("usuario : " + nombre);
    //console.log("contraseña : " + contraseña);
    //lineas para comprobar que los datos que solicitan las variables funcionan correctamente
}

const datos = require("../json/info.json")
console.log(datos.usuario)