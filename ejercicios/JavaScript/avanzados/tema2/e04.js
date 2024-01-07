//creo la clase
class Person {
  //creo la función con los 3 parámetros que me piden
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  //creo los get para cada parámetro
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }

  //hago lo mismo con los set
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }
  set lastName(newLastName) {
    this._lastName = newLastName;
  }
  set age(newAge) {
    this._age = newAge;
  }

  //creo un método para obtener en nombre completo
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

//las líneas de código a seguir son del enunciado
const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);
person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
