//Ejercicio 1


// let numero = prompt("Introduce un numero");

// //Si el numero es par va a dar 0, lo comprobamos con el modulo
// if (numero % 2 === 0) {
//   alert(`El numero ${numero} es par`);
// } else {
//   alert("El numero es impar");
// }

//Ejercicio 2

let anioDeNacimiento = prompt("Ingresa tu anio de nacimiento");
let anioActual = new Date().getFullYear();
let mayorDeEdad = anioActual - anioDeNacimiento;

if (mayorDeEdad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Eres menor de edad");
}
