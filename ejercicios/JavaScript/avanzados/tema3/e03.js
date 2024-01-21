//cambio el parámetro
function isAdult({ age }) {
  return age >= 18;
}

//datos del enunciado
const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

//sale en pantalla
console.log(isAdult(person));
