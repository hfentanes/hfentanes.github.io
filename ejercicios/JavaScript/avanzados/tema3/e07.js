//datos del ejercicio
const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

//antiguo
// const id = person.id;
// const personInfo = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   age: person.age
// };

//nuevo
const { id, ...personInfo } = person;

//sale en pantalla
console.log(id, personInfo);
