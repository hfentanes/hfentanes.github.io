//creo mi objeto
const smartphone = {
    brand: "Apple",
    name: "iPhone 13",
    price: 1300,
};

//congelo sus datos
Object.freeze(smartphone);
  
//intento cambiar su precio
for (price in smartphone) {
    smartphone.price = 100;
}

//sale en la pantalla
console.log(smartphone);