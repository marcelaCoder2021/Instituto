/*let nombre = prompt ("¿Cómo te llamás?");
let padres = prompt("¿Cómo se llaman tus padres?");
let edad = parseInt( prompt("¿Cuántos años tenés?"));
let nombreEscuela = prompt ("¿A qué escuela vas?");
let anioEscolar =parseInt(prompt("¿En qué grado estás?"));
let materia = prompt ("¿En qué materia necesitas apoyo?");
const arrayAlumnos = [nombre, padres, edad, nombreEscuela, anioEscolar, materia];

console.log(arrayAlumnos.length);
console.log(arrayAlumnos);
    
let contenedor = document.createElement("div");//defino el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<b>  Bienvenida/o: ${nombre}</b>
                        <p> Ahora te presentaremos a tus profes</p>`;
document.body.appendChild(contenedor);*/


let button = document.getElementById("btnInscripcion");
button.onclick = () =>{alert("Feliz comienzo")};

console.log (document.querySelectorAll(".postIt h4")); //muestro por consola los h4 con class postIt, se ve como un array
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
nuevoPostIt.style.background ="blue"; //le agrego color

 