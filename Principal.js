/*ROFESORES-A
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y
sexo (F - M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne otro arreglo de objetos con solamente los profesores de una categoría dada.
Función: profesoresCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número).
Retorno: array de objetos profesor que pertenecen a la categoría indicada. */



let profesoresCategoria = (profesores, categoria) => {
    let salida = [];
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].categoría === categoria) {
            salida.push(profesores[i]);
        }
    }
    return salida;
};

let profesores = [
    { categoría: 1, nombre: 'Ana', sexo: 'F' },
    { categoría: 2, nombre: 'Luis', sexo: 'M' },
    { categoría: 3, nombre: 'María', sexo: 'F' },
    { categoría: 4, nombre: 'Carlos', sexo: 'M' },
    { categoría: 5, nombre: 'Elena', sexo: 'F' },
    { categoría: 1, nombre: 'Miguel', sexo: 'M' }
];

let salidaDiv = document.getElementById("salida");

let profesoresSeleccionados = profesoresCategoria(profesores, 1);
salidaDiv.innerHTML = `Profesores en la categoría 1:<br>`;
profesoresSeleccionados.forEach(profesor => {
    salidaDiv.innerHTML += `Nombre: ${profesor.nombre}, Sexo: ${profesor.sexo}<br>`;
});




