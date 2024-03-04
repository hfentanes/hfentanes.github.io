//tengo mi array
const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20 },
{ id: 2, name: "Mario", surname: "Bianchi", age: 24 },
{ id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

//sigo este paso "Remove the last element of the array"
students.pop();

//sido este paso "Add another at the end of the array"
students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });

//sale en la pantalla (si no uso FOR-OF me sale abreviado)
for (const alumno of students) {
    console.log(alumno);
  }
