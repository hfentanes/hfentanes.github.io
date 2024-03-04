//declaro con LET porque la idea es cambiar los valores a ver qué pasa
let isDoorClosed = false;
let isDogOutside = true;

//no modifiqué este bloque, solamente he traducido el output
if (isDoorClosed == true && isDogOutside == false) {
console.log("La puesta está cerrada y el perro está adentro.");
} else if (isDoorClosed == false && isDogOutside == true) {
console.log("La puerta está abierta y el perro está afuera.");
} else console.log("Cambia los valores de las variables.");

//los valores asignados están invertidos porque sigue la segunda etapa del enunciado que nos dice para probar con invertir