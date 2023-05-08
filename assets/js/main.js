
//////FUNCION QUE LE QUITA LA NEGRITA AL REMITENTE DE MENSAJE NUEVO

// alert('sdgzsdfsdfh')

// id="remitenteNuevo" // por default negrita fw-bold, cambiar a normal
// id="nuevoActivo" /// este no lo piden pero lo mismo fw-bold 
// id="cajaRemitente" /// aqui se le hace clic pa sacarle la negrita

function quitarNegrita(){
    document.getElementById('remitenteNuevo').style.fontWeight = "500";
    document.getElementById('nuevoActivo').style.fontWeight = "400";
    document.getElementById('nuevoActivo').innerHTML = "Visto";
}


var cajaRemitente = document.getElementById('cajaRemitente');

cajaRemitente.addEventListener('click', quitarNegrita);