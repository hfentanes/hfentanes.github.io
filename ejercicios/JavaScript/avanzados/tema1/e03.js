//datos del enunciado
// const sum = function (a, b) {
// return a + b;
// }
// const subtract = function (a, b) {
// return a - b;
// }
// const multiply = function (a, b) {
// return a * b;
// }
// const divide = function (a, b) {
// return a / b;
// }
// const log = function (value) {
// console.log(value);
// }

//cambio a funciones flecha
let sum = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

//lo que sale en pantalla
let value = divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5);
console.log(value);
