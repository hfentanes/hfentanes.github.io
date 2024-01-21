//sunción con "...rest"
function suma(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

//sale en pantalla
console.log(suma(1, 2, 3, 4, 5));
