//creo una clase
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

//paso datos del enunciado para que me salgan en pantalla
const developer = new Person("Mario", "Rossi");
console.log(developer.firstName + " " + developer.lastName);
