
//////FUNCION QUE LE QUITA LA NEGRITA AL REMITENTE DE MENSAJE NUEVO

// alert('sdgzsdfsdfh')

// id="remitenteNuevo" // por default negrita fw-bold, cambiar a normal
// id="nuevoActivo" /// este no lo piden pero lo mismo fw-bold 
// id="cajaRemitente" /// aqui se le hace clic pa sacarle la negrita

function quitarNegrita(){
    document.getElementById('remitenteNuevo').classList.remove('fw-bold'); // = "500";
    document.getElementById('nuevoActivo').classList.remove('fw-bold');
    document.getElementById('nuevoActivo').innerHTML = "Visto";
}


var cajaRemitente = document.getElementById('cajaRemitente');

cajaRemitente.addEventListener('click', quitarNegrita);


////////////// FUNCION QUE APARECE EL CHAT Y DESAPARECE LOS CONTACTOS

// id="chats"
// id="contactoMobile"
// id="verChat"


function apareceChat(){
    document.getElementById('chats').classList.remove('d-none'); 
    document.getElementById('contactoMobile').classList.add('d-none');  
}
function apareceContacto(){
    document.getElementById('contactoMobile').classList.remove('d-none');
    document.getElementById('chats').classList.add('d-none'); 
}


var verChat = document.getElementById('verChat');
verChat.addEventListener('click', apareceChat);

var verContacto = document.getElementById('verContacto');
verContacto.addEventListener('click',apareceContacto);

var contactoMobile = document.getElementById('contactoMobile');
contactoMobile.addEventListener('click',apareceChat);