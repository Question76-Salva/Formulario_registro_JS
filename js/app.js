/**
*   ==============================
*   === Formulario Registro JS ===
*   ==============================
*/

// === Caputurar elementos ===
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const form = document.getElementById('form');
const parrafo = document.getElementById('warnings');


// === Eventos ===

// === Enviar formulario ===
form.addEventListener("submit", e => {

    // Para refresco
    e.preventDefault();

    // texto de aviso
    let warnings = "";

    // Bandera
    let entrar = false;

    // Expresión regular
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Validar nombre
    if(nombre.value.length < 6){
        warnings += `El nombre no es válido <br>`;
        entrar = true;
    }

    // Validar email
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido`;
        entrar = true;
    }

    // Validar password
    if(pass.value.length < 8) {
        warnings += `La contraseña no es válida`;
        entrar = true;
    }

    // Si todo está correcto "ENTRA"
    if(entrar){
        parrafo.innerHTML = warnings;
    }
})