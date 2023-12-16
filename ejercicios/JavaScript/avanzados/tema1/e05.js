//Cuando asigno un objeto a otra variable en JavaScript,
//no estoy creando una nueva COPIA del objeto; en cambio,
//estoy creando una REFERENCIA al mismo objeto.
//En el código proporcionado por el enunciado tenemos que:

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

//person2 no es un nuevo objeto; es simplemente una referencia al mismo
//objeto al que person1 hace referencia. Por lo tanto, cuando
//modifico el objeto a través de person2, los cambios se reflejan
//en el OBJETO ORIGINAL, ya que esencialmente apuntan al mismo objeto.
//Entonces, cuando modifico la propiedad firstName de person2:

person2.firstName = "Simon";

//Tanto person1 como person2 reflejarán este cambio, y veré
//los valores actualizados cuando los imprima por pantalla:

console.log(person1);
console.log(person2);

//Ambos person1 y person2 tendrán ahora la propiedad firstName
//como siendo 'Simon'. Este comportamiento se debe a que hacen
//referencia al MISMO objeto.
