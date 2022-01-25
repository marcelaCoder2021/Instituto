
let button = document.getElementById("btnInscripcion"); //evento onclick
button.onclick = () =>{alert("Feliz comienzo")};
//*************ESTO FUE PARA UN DESAFIO*********************
/*console.log (document.querySelectorAll(".postIt h4")); //muestro por consola los h4 con class postIt, se ve como un array
let postIt = document.querySelectorAll (".postIt h4");
console.log ((postIt.innerHTML));  
postIt.forEach(element => {
    console.log (element.innerHTML); //muestro por consola el contenido de cada h4 de mi clase "PostIt"
    }
);
let nuevoPostIt = document.createElement("h4"); //creo nuevo h4
nuevoPostIt.setAttribute("id","postIt"); //le pongo id
nuevoPostIt.innerHTML="Y listo"; // le agrego texto
console.log (nuevoPostIt); //por consola lo agregado, esta como string
console.log(nuevoPostIt.innerHTML); //muestro por consola el nuevo contenido
document.getElementById("postIt").appendChild(nuevoPostIt); //agrego al HTML
nuevoPostIt.style.background ="blue"; //le agrego color*/

/********************************************/ 
//formulario de inscripcion
//variables formulario
const nombre = document.querySelector("#nombre");
const nombrePadres = document.querySelector("#nombrePadres");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const escuela = document.querySelector("#escuela");
const grado = document.querySelector("#grado");
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
materia.onchange = ()=> {  //evento 
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
