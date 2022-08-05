// Ejercicio 1

console.log(idCard('Adal', 'Hidalgo, MX', 'Jugar Videojuegos'));

function idCard(nombre, ubicacion, pasatiempo){
    return `
    Hola, mi nombre es ${nombre}.
    Vivo en ${ubicacion}
    y disfruto ${pasatiempo}
    `
}

//Ejercicio 2


console.log(calcMascotaAge(14));

function calcMascotaAge(edadPerro){
    //Guardamos el logaritmo con el parametro, para pasarle el argumento.
    let logaritmo = Math.log(edadPerro);
    //Formula para calcular edad de perro.
    let formula = 16 * logaritmo + 31;

    return `La edad de tu perro es: ${formula} años humanos 🐶`
}

