//hago que me salga por orden de edad, de menor a mayor
function sortPeopleByAge(arr) {
  return arr.slice().sort((a, b) => a.age - b.age);
}

//datos del enunciado
const people = [
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
const sortingByAge = sortPeopleByAge(people);
console.log(sortingByAge);
