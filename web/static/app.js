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

function comprobar_usuario(nombre, usuario_db){
    if(nombre === usuario_db){
        console.log("Usuario encontrado");
        //Llamar funcion para comprobar contraseña
    }else if(nombre != usuario_db){
        console.log("Buscando usuario")
    }else{
        //alert("Credenciales incorrectas");
        console.log("usuario no encontrado");
    }
}

function comprobar_contraseña(contraseña, password_db){
    if(contraseña === password_db){
        alert("Acceso concedido")
        window.open('/principal', "_self");
    }else if(contraseña != password_db){
        console.log("intentando acceder")
        intentos += 1;
        if(intentos == 4){
            alert("Acceso denegado")
            location.reload()
        }
    }
}

function usuarios_db(nombre, contraseña){
    var info = 0
    fetch('static/json/user.json')
    .then(respuesta => respuesta.json())
    .then(data => {
        data.forEach(date => {
            info = date
            comprobar_usuario(nombre, date[1])
            comprobar_contraseña(contraseña, date[2])
            //console.log(info)
        });
    })
}
