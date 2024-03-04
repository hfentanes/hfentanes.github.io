//el enunciado me da ese array
const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

//hago que salga en pantalla todos los elementos de mi array
students.forEach((student) => console.log(student));

//el ".forEach" en una función de tipo flecha he visto en el sitio web del enlace que dejé abajo:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach