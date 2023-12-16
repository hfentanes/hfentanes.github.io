//creación de la función
function sumUntil(maxValue) {
  let sum = 0;

  for (let i = 1; i <= maxValue; i++) {
    sum += i;
  }

  return sum;
}

//lo que sale en pantalla
console.log(sumUntil(5));
