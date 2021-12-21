class Alumnos {
    constructor(nombre, padres, edad, nombreEscuela, anioEscolar, materia) {
        this.nombre = nombre;
        this.padres = padres;
        this.edad = edad;
        this.nombreEscuela = nombreEscuela;
        this.anioEscolar = anioEscolar;
        this.materia = materia;
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
