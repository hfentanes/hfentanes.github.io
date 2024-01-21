//datos del ejercicio
function sum(num1, num2, num3) {
  return num1 + num2 + num3;
}

//lo que pone a partir de aqui es lo que ayudará
//a que las infos se imprimam en pantalla
const numbers = [1, 2, 3];

//antes
//console.log(sum(numbers[0], numbers[1], numbers[2]));

//ahora
console.log(sum(...numbers));
