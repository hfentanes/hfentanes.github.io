//creo mi arranjo
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sigo este paso "Print the first element of the array."
console.log(numbers[0]);

//sigo este paso "Print the last element of the array."
console.log(numbers[numbers.length - 1]);

//sigo este paso "Print the array length."
console.log(numbers.length);

//sigo este paso "Print the twentieth element of the array and explain the output."
console.log(numbers[20]); //explicación abajo

//MI EXPLICACIÓN:
//Me tiene que salir "undefined" porque mi matriz/arranjo/array
//tiene una longitud de 10 y no hay valores asignados para lo que
//viene después de mi último término. Si quisiera, podría asignar
//un valor al término 20 (los de entremedio seguirían vacíos) para
//luego hacer que saliera en pantalla y así no sería indefinido.