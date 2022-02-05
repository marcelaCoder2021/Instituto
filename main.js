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
/**************************************************************************************************/
//animacion cardProfesores











/******************************************************************************************************/ 
//cardProfes
/*const profesores = document.querySelector (".cardProfes");
class Profesor {
    constructor(imagen, nombre, materia, descripcion) {
        this.imagen= imagen;
        this.nombre = nombre;
        this.materia = materia;
        this.descripcion = descripcion;
    }
}
function listadoAlumnos (){
    let nombre = prompt ("¿Cómo te llamás?");
    let padres = prompt("¿Cómo se llaman tus padres?");
    let edad = parseInt( prompt("¿Cuántos años tenés?"));
    let nombreEscuela = prompt ("¿A qué escuela vas?");
    let anioEscolar =parseInt(prompt("¿En qué grado estás?"));
    let materia = prompt ("¿En qué materia necesitas apoyo?");
    const alumno = new Alumnos (nombre, padres, edad, nombreEscuela, anioEscolar, materia);
    console.log (alumno);
    return alumno;
}
listadoAlumnos ();

const arrayAlumnos = [];
    arrayAlumnos.push (new Alumnos (this.nombre, this.padres, this.edad, this.nombreEscuela, this.anioEscolar, this.materia));
    console.log (arrayAlumnos);

*/


//formulario de inscripcion
//variables formulario
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const materia = document.querySelector("#materia");
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
nombre.onchange = () => { //evento si ingresa nombre activa el checkusuario
    checkUsuario();
    localStorage.setItem("Nombre alumno", nombre.value); //guardo en el localStorage el nombre del alumno
}

//eleccion de materias
const materiaElegida = () => { //para que aparezcan las opciones de profesores según la materia elegida
    const opcionMateria = materia.value;
    const divGlobal = document.querySelector("#segunMateria").querySelectorAll(".datos");
    switch (opcionMateria) {
        case '0':
            divGlobal.forEach(elemento => {
                elemento.style.display = "none";
        })
            elegi.style.display = "none";
            break;
        case '1':
            divGlobal.forEach(elemento => {
                elemento.style.display = "none";
        })
            profesorMatematica.style.display = "block";
            break;
        case '2':
            divGlobal.forEach(elemento => {
                elemento.style.display = "none";
        })
            profesorLengua.style.display = "block";
            break;
        case '3':
            divGlobal.forEach(elemento => {
                elemento.style.display = "none";
        })
            profesorHistoria.style.display = "block";
            break;
        case '4':
            divGlobal.forEach(elemento => {
                elemento.style.display = "none";
        })
            profesorGeografia.style.display = "block"; 
            break;
        case '5':
            divGlobal.forEach(elemento => {
                elemento.style.display = "none";
        })
            profesorIngreso.style.display = "block";
            break;  
    }
}
materia.onchange = ()=> {  //evento onchage
    materiaElegida();
    localStorage.setItem("Materia", materia.value); //guardo en localStorage la materia seleccionada
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
email.onchange = ()=> { //evento cuando cambia el campo email, chequea que sea valido
    checkEmail();
    localStorage.setItem("Email", email.value); //guardo en localStorage
}
 
/********************************************/
/**************profesores********/
class Profesores {
    constructor(imagen, nombre, materia, introduccion) {
        this.imagen= imagen;
        this.nombre = nombre;
        this.materia = materia;
        this.introduccion = introduccion;
    }
}
let Mati = new Profesores ("Mati", "Historia","Adorado por todos los chicos, la historia enseñada por él\
    es como un cuento lleno de aventuras.");  
let Gastón = new Profesores ("Gastón", "Matemática","Dinámico y entretenido, logra que la matemática se\
    convierta en un juego en el que todos los chicos quieren participar.");
let Nicole = new Profesores ("Nicole", "Lengua","Gracias a ella, los verbos dejaron de ser un problema y\
    los errores ortográficos quedaron en el pasado.");
let Stephi = new Profesores ("Stephi", "Geografía", "Un viaje a través de los países, su clima, su división\
    política, su topografía, y mucho más.");

let cardProfesores = function () {
    return this.imagen + ""+ this.nombre +""+ this.materia + ""+ this.introduccion;
 alert (Profesores.cardProfesores);
}





let arrayProfesores = [
    {profesor: "Gastón", materia: "Matemática", introduccion:"Dinámico y entretenido, logra que la matemática se\
     convierta en un juego en el que todos los chicos quieren participar."},
    {profesor: "Nicole", materia: "Lengua", introduccion:"Gracias a ella, los verbos dejaron de ser un problema y\
     los errores ortográficos quedaron en el pasado."},
    {profesor: "Mati", materia: "Historia", introduccion:"Adorado por todos los chicos, la historia enseñada por él\
     es como un cuento lleno de aventuras."},
    {profesor: "Stephi", materia: "Geografía", introduccion:"Un viaje a través de los países, su clima, su división\
     política, su topografía, y mucho más."},
];