//datos del enunciado
class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  toJson() {
    return JSON.stringify(this);
  }

  //creo un método fromJson
  static fromJson(json) {
    const parsed = JSON.parse(json);
    return new Person(parsed.id, parsed.firstName, parsed.lastName, parsed.age);
  }
}

//sale en pantalla
const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);
