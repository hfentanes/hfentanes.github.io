//el enunciado me da ese array
const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

//hago que salga en pantalla todos los elementos de mi array
for (const student of students) {
    console.log(student);
}

//el FOR-OF lo he visto en el sitio web del enlace que dejé abajo:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of