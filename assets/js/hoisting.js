// console.log(nombre);
// console.log(nombre2);
var nombre = undefined;
console.log(nombre);
nombre = "Adal";

var nombre = "Adal";
let nombre2 = "Adal";
const nombre3 = "Adal";

//Hoisting
console.log(saludo("Adal"));
function saludo(nombre) {
  return `Hola ${nombre}`;
}

saludar("Karlos");
const saludar = (nombre) => {
  return `Hola ${nombre}`;
};



