//datos del enunciado
const person1 = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
  address: {
    state: "Italy",
    city: "Rome",
    street: "Via Romano, 12",
  },
};

//creo una cópia de person1
const person2 = JSON.parse(JSON.stringify(person1));

//cambio la ciudad de person2
//sin que afecte a person1
person2.address.city = "Milan";

//sale en pantalla
console.log(person1);
console.log(person2);
