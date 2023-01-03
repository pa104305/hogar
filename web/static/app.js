console.log("Prueba?") //comprobar si el archivo js esta conectado a html

var intentos = 0;
var loged = 0;
var id = undefined;

function log(){//funcion a la que se llama desde html cuando se hace click en el boton Ingresar
    nombre = document.querySelector("#nombre").value //variable que guarda el valor introducido en el nombre de ususario
    contraseña = document.querySelector("#contraseña").value //variable que guarda el valor introducido en la contraseña
    usuarios_db(nombre, contraseña); //se llama a la funcion que obtiene la información de la base de datos
}

function comprobar_usuario(datos, inputUser, inputPass){ //esta funcion se encarga de combrobar el usuario y contraseña
    //ingresado con la información de la base de datos
    if(datos.user === inputUser && datos.password === inputPass){ //compara el usuario y contraseña ingresado con la base de datos
        console.log("Usuario encontrado");
        id = datos.id
        loged = 1
        //alert(id)
        window.open('/principal', "_self"); // se redirecciona al usuario a la pagina principla si este ingreso credenciales correctas
    }else{
        intentos += 1; //si se equivoca de credenciales suma una a la variable intentos
    }
    if(intentos == 4){ // si intentos es igual a 4 se le notifica al usuario que ingreso las credenciales incorrectas
        console.log("usuario no encontrado" + intentos);
        //alert("Acceso denegado")
        location.reload() //se recarga la pagina para que se borren los datos ingresados
    }
}

function usuarios_db(nombre, contraseña){ //solicita la información a la base de datos para despues utilizarla
    var info = 0 // variable para posteriormente guardar la informacion de la base de datos
    fetch('static/json/user.json')
    .then(respuesta => respuesta.json())
    .then(data => {
        data.forEach(date => {
            info = data
            comprobar_usuario(date, nombre, contraseña)
        });
    })
}

function log_out(){ //funcion de cierre de sesion
    window.open('/', "_self"); //se redirecciona al usuario a la pantalla de inicio para dar fin a la sesion
    loged = 0
}

function create_user(){
    if(loged == 1){
        var new_username = document.querySelector('')
        var new_password = document.querySelector('')
        let route = `/users/createuser/${new_username}/${new_password}`
        window.open(route, "_self")
    }else{
        alert('Primero necesita iniciar sesion')
        window.open('/', "_self")
    }
}

function modify_username(){
    if(loged == 1){
        var change_user = document.querySelector('').value
    }else{
        alert('Primero debe de iniciar sesion')
        window.open('/', "_self")
    }
}

function modify_password(){
    if(loged == 1){
        let old_password = info[id - 1].password
        var input_old_password = document.querySelector('').value
        var change_password = document.querySelector('').value
        if(old_password === input_old_password){
            let route = `/users/modify/password/${change_password}/${id}`
            window.open(route, "_self")
        }
    }else{
        alert('Primero debe de iniciar sesion')
        window.open('/', "_self")
    }
}