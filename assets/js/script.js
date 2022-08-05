//Este es un comentario de una sola linea usando dos barras o diabonales

/*
* Este es un comentario multilinea usando una diagonal y asterisco para abrir
y asterisco y diagonal para cerrar
*/

/* */

//Una alerta es una ventana de dialogo que muestra un mensaje
//alert('Estoy vivo!!!');

//Pedimos la informacion al usuario con un prompt(), la guardamos en una variable llamada nombre para despues mostrarla
// let nombre = prompt(`Ingresa tus valores`)

//Usamos un console.log para mostrar lo que se guardo en la variable nombre.
// console.log(nombre);

//Alerta con el saludo
// alert(`Hola ${nombre}`)
const result = document.querySelector('#result');

let dato1 = prompt('Ingresa la base');
let dato2 = prompt('Ingresa el altura');

let areaTriangulo = (base*altura)/2


function areaTriangulo(base,altura){
    return (base * altura)/2
}
console.log(areaTriangulo(10,20));