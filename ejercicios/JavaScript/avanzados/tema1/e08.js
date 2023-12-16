//creo mi función
function multiplyByTwo(parameter) {
  function inner() {
    return parameter * 2;
  }

  return inner;
}

// sale en pantalla
const result = multiplyByTwo(4)();
console.log(result);
