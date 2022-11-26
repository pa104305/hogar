//import info from json/info.json
console.log("Prueba?") //comprobar si el archivo js esta conectado a html

var intentos = 0;

function log(){//funcion a la que se llama desde html cuando se hace click en el boton Ingresar
    nombre = document.querySelector("#nombre").value //variable que guarda el valor introducido en el nombre de ususario
    contraseña = document.querySelector("#contraseña").value //variable que guarda el valor introducido en la contraseña
    usuarios_db(nombre, contraseña);
    //window.open('/principal', "_self"); //"_self" sirve para que la ventana se abra en la misma pestaña 
    //abre la ventana home al dar click en ingresar, despues sera cuando el nombre y contraseña coincidan :p
    //console.log("usuario : " + nombre);
    //console.log("contraseña : " + contraseña);
    //lineas para comprobar que los datos que solicitan las variables funcionan correctamente
}

function comprobar_usuario(datos, inputUser, inputPass){
    if(datos[1] === inputUser && datos[2] === inputPass){
        console.log("Usuario encontrado");
        alert("Acceso concedido")
        window.open('/principal', "_self");
    }else{
        intentos += 1;
    }
    console.log(intentos)
    if(intentos == 4){
        console.log("usuario no encontrado" + intentos);
        alert("Acceso denegado")
        location.reload()
    }
}

function usuarios_db(nombre, contraseña){
    var info = 0
    fetch('static/json/user.json')
    .then(respuesta => respuesta.json())
    .then(data => {
        data.forEach(date => {
            info = date
            comprobar_usuario(date, nombre, contraseña)
            //comprobar_contraseña(contraseña, date[2])
        });
    })
}

function log_out(){
    window.open('/', "_self");
}