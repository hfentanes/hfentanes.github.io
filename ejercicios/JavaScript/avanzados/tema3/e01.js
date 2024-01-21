//datos del enunciado
let num1 = 10;
let num2 = 20;

//antes de cambiar
console.log("Antes del cambio:", num1, num2);

//hago un cambio por desestructuración
[num1, num2] = [num2, num1];

//después de cambiar
console.log("Después del cambio:", num1, num2);
