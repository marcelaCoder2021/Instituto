//navMenuHamburguesa
const toggleButton = document.getElementById("buttonMenu"); // elijoClickeables
const navWrapper = document.getElementById("nav");

toggleButton.addEventListener("click", () => {     //toggleAgregaClaseYSacaClase
    toggleButton.classList.toggle("close");
    navWrapper.classList.toggle("show");
});
navWrapper.addEventListener("click", e => {     //escondoMenu
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});
//fin boton hamburguesa
/*************************************************************************************************************/
//animacion boton inscribite ahora
let animateButton = function(e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },900);
  };
  let bubblyButtons = document.getElementsByClassName("btnInscripcion");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('mouseenter', animateButton, false);
  };
//fin animacion botn inscribite ahora
/************************************************************************************************************/
//modal inicio sesión
if(document.getElementById("btnModal")){
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("btnModal");
    let span = document.getElementsByClassName("confirmar")[0];
    let body = document.getElementsByTagName("body")[0];
    btn.onclick = function() {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }
    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}
/***********************************************************************************************************/
//formulario de inscripcion
//variables formulario
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const materia = document.querySelector("#materia");
const profe = document.querySelector("#profe");
const matematica = document.querySelector("#matematica");
const lengua = document.querySelector("#lengua");
const historia = document.querySelector("#historia");
const geografia = document.querySelector("#geografia");
const ingreso = document.querySelector("#ingreso");
const boton = document.querySelector("#btn");
const formulario = document.querySelector("#formulario");
const profesorMatematica=document.querySelector("#profesorMatematica");
const profesorLengua=document.querySelector("#profesorLengua");
const profesorHistoria=document.querySelector("#profesorHistoria");
const profesorGeografia=document.querySelector("#profesorGeografia");
const profesorIngreso=document.querySelector("#profesorIngreso");
const enviar = document.querySelector("#btn");

// validacion de nombre
const showError = (input, mensaje) => {
    const formField = input.parentElement;
    formField.classList.remove("valido");
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.textContent = mensaje;
}
const showValido = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("valido");
    const error = formField.querySelector("small");
    error.textContent = '';
}
const checkUsuario = ()=> {
    let valido = false;
    const min = 6;
    const max = 20;
    const usuario = nombre.value.trim();
    if (usuario == '') {
        showError(nombre,"No ingresaste tu nombre");
    } else if (usuario.length < min || usuario.length > max) {
        showError(nombre, `El nombre tiene que tener entre ${min} y ${max} caracteres`);
    } else {
        showValido(nombre);
        valido = true;
    return valido;
    }
}
//validacion email
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const checkEmail = () => {
    let valido = false;
    const mail = email.value.trim();
    if (email == "") {
        showError(email, "Ingresá tu email");
    } else if (!isEmailValid(email)) {
        showError(email, "El email no es valido")
    } else {
        showValido(email);
        valido = true;
    }
    return valido;
}
/*************************************************************************************************************/

//simil carrito de compras

const claseAgendada = {
    Materia: materia.value,
    Horario: horario.value,
    Profesor: profe.value
}
const enJson = JSON.stringify (claseAgendada);
console.log (enJson);
