//objeto del enunciado
const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

//cambio el nombre de las keys
const { id, firstName: name, lastName: surname, age: old } = person;

//sale en pantalla
console.log(id, name, surname, old);
