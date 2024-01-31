//creo la función que evalua el número
const mayorQueDiez = new Promise((resolve, reject) => {
  const number = 15;

  if (number > 10) {
    resolve(`El número ${number} es mayor que 10.`);
  } else {
    reject(`El número ${number} es menor que 10.`);
  }
});

//hago que el resultado salga en pantalla
mayorQueDiez
  .then((exito) => {
    console.log("Éxito:", exito);
  })
  .catch((fallo) => {
    console.error("Fracaso:", fallo);
  });
