profesor = {
    cedula: undefined,
    nombre: undefined,
    apellido: undefined,
}
var estaVacio = false;
function obtenerValor() {
    let cedula = document.getElementById('id-cedula').innerText;

    console.log(cedula.toString())
    if (cedula.length == 0) {
        console.log("vacio cedula")

        estaVacio = false;
    } else {
        estaVacio = true;
        profesor.cedula = cedula;
    }
    let nombre = document.getElementById('nombre').innerText;
    if (nombre.length == 0) {
        console.log("vacio nombre")

        estaVacio = false;
    } else {
        profesor.nombre = nombre;
        estaVacio = true;
    }
    let apellido = document.getElementById('apellido').innerText;
    if (apellido.length == 0) {
        console.log("vacio apellido")
        estaVacio = false;
    } else {
        profesor.apellido = apellido;
        estaVacio = true;
    }

}

function cambiarJSON() {
    let infoJSON = document.getElementById('idinputjson').innerText = profesor.apellido;
}
function mensajeVacio() {
    if(estaVacio){
        let mens = document.getElementById('idmensajevacio').innerText = "Llenar los datos";
    }else{
        
    }
    

}