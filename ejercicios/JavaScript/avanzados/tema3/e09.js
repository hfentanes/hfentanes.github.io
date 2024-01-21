//datos del enunciado
class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
const developer = new Person(1, "Mario", "Rossi", 25);

//sale en pantalla (uso el comando de convertir JSON a string)
const devJSON = JSON.stringify(developer, null, 2);
console.log(devJSON);
