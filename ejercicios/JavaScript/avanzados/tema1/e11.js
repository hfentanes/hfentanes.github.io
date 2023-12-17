//función que filtra las personas que tienen 18 o más
function adultFilter(persons) {
  return persons.filter((person) => person.age >= 18);
}

//string de objetos que me dá el enunciado
const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

//sale en pantalla
const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
