//datos del enunciado
const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

//filtro
const json = JSON.stringify(person, ["id", "age"]);

//sale en pantalla
console.log(json);
