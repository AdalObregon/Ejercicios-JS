// Mejores prácticas

// camelCase
//  Utilizar mayusculas en la mitad de nuestras variables
// variableTriangulo, miNombre, miEdad, miDireccion

// Palabras reservadas
// No usar palabras reservadas para declarar una variable
// if, return, true, false, for, while, let, var, etc...
/*
var while;
var null ;
var if;
var true;
var false;
var var;
var const;
var let;
*/

// Seguir un standard personal

// Pueden contener numeros, letras, guion bajo, simbolo de dolar
var a;
var a1;
var a_Nombre;
var a$Direccion;

// Declaracion de variables
// Type Number
var edad = 24;
var peso = 78;
var miopia = 3;
var astigmatismo = 3;

// Type Boolean
var ciego = true;
var hambre = true;
var bateria = false;
var ia = true;

// Type String
var nombre = "Zabdiel Diaz";
var ciudad = "Aguascalientes";
var nacionalidad = `Mexicano`;

// Type null
var ganasDeBibir = null;
var nineros = null;
var briAmonestaciones = null;

// Variables declaradas con un mismo valor
var x,
  y,
  z = 4;

// Variables undefined
var xx, yy, zz;

//Defined: el amor que le damos a nuestro crush.
//Undefined: el amor que nos tiene nuestro crush.
//Null: el amor que nos decia tener nuestro ex.

// Variable tres = 4
//  var dos = tres
//  var uno = tres
var uno = (dos = tres = 4);

// Escribir en una sola linea variables undefined de nuestro carrito de compras

var pan, jugo, jabon, sopa, azucar, sal, cereal, yogurt, leche;

//TypeOf();
// Nos indica el tipo de dato al que pertenece nuestra variable
let a = 2;
console.log(typeof a);

let b = "2";
console.log(typeof b);

let c = null;
console.log(typeof c);

const carros = ["BMW", "Volvo", "Mercedes", "Ford"];

const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

const combinacion = [1, "Hola", null, "5"];
