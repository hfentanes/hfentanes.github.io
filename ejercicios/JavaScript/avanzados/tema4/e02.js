//creo mi función
function repeatHello(callback) {
  setInterval(() => {
    callback();
  }, 1000);
}

//creo un callback con una función flecha
const helloCallback = () => {
  console.log("Hello");
};

//llamo a la función
repeatHello(helloCallback);
