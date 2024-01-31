//defino si isLogged es true o false
const isLogged = true;

//creo la primera promesa, la que me deja seguir si isLogged es true
const primeraPromesa = new Promise((resolve, reject) => {
  if (isLogged) {
    resolve(Math.random());
  } else {
    reject(new Error("Usuario no autenticado"));
  }
});

//creo la segunda promesa, la que me devuelve datos si 'num' es mayor que 0,5
const segundaPromesa = (num) =>
  new Promise((resolve, reject) => {
    if (num > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Error: El número no es mayor que 0.5"));
    }
  });

primeraPromesa
  //uno las dos promesas
  .then((numeroAleatorio) => segundaPromesa(numeroAleatorio))

  //si todo sale bien, me va a arrojar los datos del usuario en pantalla
  .then((resultadoFinal) => {
    console.log(resultadoFinal);
  })

  //manejo errores por si alguna de las promesas se rechaza (o las dos!)
  .catch((error) => {
    console.error(error.message);
  })

  //se ejecuta independientemente de si hubo errores o no
  .finally(() => {
    console.log("Proceso finalizado.");
  });
