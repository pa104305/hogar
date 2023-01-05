console.log("Prueba?") //comprobar si el archivo js esta conectado a html

var intentos = 0;
var valorOfCookie = undefined;
var id = undefined;

function log(){//funcion a la que se llama desde html cuando se hace click en el boton Ingresar
    nombre = document.querySelector("#nombre").value //variable que guarda el valor introducido en el nombre de ususario
    contraseña = document.querySelector("#contraseña").value //variable que guarda el valor introducido en la contraseña
    setTimeout(() => {
        usuarios_db(nombre, contraseña)
    }, 1000)
    //usuarios_db(nombre, contraseña); //se llama a la funcion que obtiene la información de la base de datos
}

function comprobar_usuario(datos, inputUser, inputPass){ //esta funcion se encarga de combrobar el usuario y contraseña
    //ingresado con la información de la base de datos
    if(datos.user === inputUser && datos.password === inputPass){ //compara el usuario y contraseña ingresado con la base de datos
        console.log("Usuario encontrado");
        id = datos.id
        document.cookie = "id="+id;
        document.cookie = "log=true"
        window.open('/principal', "_self"); // se redirecciona al usuario a la pagina principla si este ingreso credenciales correctas
    }else{
        intentos += 1; //si se equivoca de credenciales suma una a la variable intentos
    }
    if(intentos == info.length){ // si intentos es igual a 4 se le notifica al usuario que ingreso las credenciales incorrectas
        console.log("usuario no encontrado" + intentos);
        alert("Acceso denegado")
        location.reload() //se recarga la pagina para que se borren los datos ingresados
    }
}

function usuarios_db(nombre, contraseña){ //solicita la información a la base de datos para despues utilizarla
    //var info = 0 // variable para posteriormente guardar la informacion de la base de datos
    
    fetch('static/json/user.json')
    .then(respuesta => respuesta.json())
    .then(data => {
        data.forEach(date => {
            comprobar_usuario(date, nombre, contraseña)
        });
    })
}

function log_out(){ //funcion de cierre de sesion
    window.open('/', "_self"); //se redirecciona al usuario a la pantalla de inicio para dar fin a la sesion
    document.cookie = "id=0;expires=1 Mar 1990 00:00:00 GMT"
    document.cookie = "log=false;expires=1 Mar 1990 00:00:00 GMT"
}

function create_user(){
    cookies("log")
    if(valorOfCookie == "true"){
        var new_username = document.querySelector('.new_username').value
        var new_password = document.querySelector('.new_password').value
        let route = `/users/createuser/${new_username}/${new_password}`
        window.open(route, "_self")
    }else{
        alert("Inicie sesion")
        window.open('/', "_self")
    }
}

// ? Como agregar cookies para almacenar el ID y el estdo de log del usuario

function modify_username(){
    cookies("log")
    if(valorOfCookie == "true"){
        var change_user = document.querySelector('#username').value
        cookies("id")
        let route = `/users/modify/username/${change_user}/${valorOfCookie}`
        window.open(route, "_self")
    }else{
        alert("Primero inicie sesion")
    }
}

function modify_password(){
    cookies("log")
    if(valorOfCookie == "true"){
        cookies("id")
        let old_password = info[valorOfCookie - 1].password
        var input_old_password = document.querySelector('#old_password').value
        var change_password = document.querySelector('#new_password').value
        if(old_password === input_old_password){
            let route = `/users/modify/password/${change_password}/${valorOfCookie}`
            window.open(route, "_self")
        }
    }else{
        alert("Primero inicie sesion")
        window.open('/', "_self")
    }
}

function cookies(nombre){
    var lista = document.cookie.split(";");
    for (i in lista) {
        var busca = lista[i].search(nombre);
        if (busca > -1){
            var micookie=lista[i]
        }
    }
    var igual = micookie.indexOf("=");
    valorOfCookie = micookie.substring(igual+1);
    console.log(valorOfCookie)
}

var info = 0 // variable para posteriormente guardar la informacion de la base de datos
    fetch('static/json/user.json')
    .then(respuesta => respuesta.json())
    .then(data => {
        data.forEach(date => {
            info = data
        });
    })