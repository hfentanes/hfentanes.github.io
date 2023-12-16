//creo mi objeto
const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

//uso Object.keys como me pide el enunciado
const keys = Object.keys(person);

//sale en pantalla
keys.forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});
