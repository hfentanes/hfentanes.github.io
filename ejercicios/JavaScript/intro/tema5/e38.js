//tengo mi objeto con sus dos propiedades
let car = {
    "name": "Skoda",
    "color": "negro"
}

//salen en la pantalla los nombre de las dos propiedades
for (const variable in car) {
    console.log(variable);
}