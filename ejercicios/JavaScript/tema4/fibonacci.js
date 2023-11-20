//declaro las variables
let sequence = [0, 1];
let newNumber = 0;

//proceso (quiero obtener solamente los diez primeros términos)
function fibonacci() {
  for (i = 0; i <= 10; i++) {
    newNumber = sequence.at(-1) + sequence.at(-2); 
    sequence.push(newNumber);
  }
}

//sale en la pantalla
fibonacci();
console.log(sequence);

//ya sabía qué era un array y como funcionaba "sequence.push"
//he descubierto como utilizar "array.at()" en el sitio web del enlace de abajo
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/at