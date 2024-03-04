//creo mi objeto con sus dos propiedades
let car = {
    "name": "Skoda",
    "color": "negro"
}

//sale en la pantalla
//console.log(`El modelo del coche es ${car.name} y su color es ${car.color}.`);

for (name in car) {
    console.log(`El modelo del coche es ${car.name}.`);
}

for (color in car) {
    console.log(`Su color es ${car.color}.`);
}