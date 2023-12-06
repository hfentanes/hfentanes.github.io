//datos
const question1 = 101 < 67; //falso
const question2 = 1 == true; //verdadero
const question3 = true !== 1; //falso
const question4 = 4 <= 4; //verdadero

//lo que sale en pantalla
console.log(question1 || question2); //the result must be true
console.log(question1 && question2); //the result must be false
console.log(question3 || question2); //the result must be true
console.log(question4 && !question4); //the result must be false
console.log(question2 && !question4); //the result must be false

//he comprobado y dan el resultado que se espera