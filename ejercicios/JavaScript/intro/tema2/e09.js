//datos del ejercicio
const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

//es falso, son dos cadenas distintas
console.log(name == lastname);

//es verdadero porque estoy utilizando el comando de 'menor O IGUAL' (y 27 es igual a 27)
console.log(age <= average);

//es falso ya que una variable es un número y la otra es una cadena (si la cadena fuera "1" sería verdadero)
console.log(firstYearCompleted == lastname);

//es verdadero por los conceptos de 'true-y' y 'false-y', en donde 1 representa 'verdadero' y 0 representa 'falso'
console.log(yearsCompleted == firstYearCompleted);

//es falso, los tres signos de igualdad comprueban si dos variables son idénticas; 'true' y '1' no son variables idénticas
console.log(firstYearCompleted === yearsCompleted);

//es verdadero ya que 1 < 27
console.log(examsCompleted < age);

//es falso ya que false representa a 0, y '0 > 1' no es una afirmación verdadera
console.log(isGraduated > yearsCompleted);

//he analisado cada caso y comprobado mis respuestas