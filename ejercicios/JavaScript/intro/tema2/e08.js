//declaro mi variable y le asigno un valor verdadero
let variable = true;

//lo que sale en pantalla
console.log("Mi variable es: " + variable + ". | Su tipo es: " + typeof(variable) + ".")

//cambio de booleano a valor numérico
variable = Number(variable);
console.log("Puedo convertirla en un número: " + variable + ". | Su nuevo tipo es: " + typeof(variable) + ".");

//cambio de valor numérico a cadena
variable = String(variable);
console.log("Puedo convertirla en una cadena: " + variable + ". | Su nuevo tipo es: " + typeof(variable) + ".");

//cambio de cadena a booleano
variable = Boolean(variable);
console.log("Al final, la transformaré en un booleano: " + variable + ". | Su nuevo tipo es: " + typeof(variable) + ".");
