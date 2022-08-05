/*
 *      Arrays o Arreglos

    Definicion
    Un arreglo o array es un conjunto de datos que se pueden almacenar
    en una sola variable.

    Cuando tenemos una variable, la usamos para almacenar UN solo dato.
    En cambio, en un arreglo, guardamos MUCHOS datos a manera de lista.

    Un array ya no es un tipo de dato primitivo, se considera un objeto
    porque es una estructura de datos

 */



/*
* 2.- Segunda Forma

    La segunda forma se trata de crear el arreglo solo usando corchetes []. Esta forma es la mas usada para crear arreglos en JS.
*/
var marcaDeColores2 = ["Mapita", "Norma", "Vividel", "Faber Castell", "BlancaNieves"];

//Ejemplos de Arreglos
listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros", "Pug"];
console.log(listaDePerritos);

//Ejemplo de Arreglo 2
listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
console.log(listaDelSuper)

///////////////////////////////////////////////////////

let nombre = "Felipe";

array = ["Felipe", "Ivonne", "Briana", "Zabdiel", "Alonso"];

array2 = ["Felipe", 23, true, null, undefined];



// Ejercicio Zoom

//Ejemplos de Arreglos
listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros", "Pug"];
console.log(listaDePerritos);

//Paises
arrayPaises = [
  "México",
  "Estados Unidos",
  "Inglaterra",
  "Portugal",
  "Argentina",
];

//videojuegos
arrayVideoJuegos = [
  "Fifa",
  "Rocket League",
  "Halo Infinite",
  "Fall Guys",
  "Horizon 5",
];

//Peliculas
arrayPeliculas = [
  "Forrest Gump",
  "Monsters Inc",
  "Shrek",
  "UP!",
  "Soy Leyenda",
];

//Series
arraySeries = [
  "Breaking Bad",
  "American Horror Story",
  "American Horror Stories",
  "Supernatural",
  "Stranger Things",
];

//Sumas
arraySumas = [[2 + 3], [4 + 3], [7 + 10]];
console.log(arraySumas);


let propiedadDeMiComputadora = {
    marca: "Asus",
    modelo: "GL552JX",
    procesador:  "Intel Core i7",
    ram: "16 GB",
    almacenamiento: "1 TB"
}

const {ram: memoriaRam, modelo} = propiedadDeMiComputadora;
console.log(memoriaRam);