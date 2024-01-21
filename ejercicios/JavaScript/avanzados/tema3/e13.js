//datos del enunciado
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const developer = new Person("Mario", "Rossi");

//determino qué sale en pantalla con template literal
console.log(`${developer.firstName} ${developer.lastName}`);
