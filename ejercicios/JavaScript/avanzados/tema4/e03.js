//creo mi función con setInterval
function repeatHello(callback) {
  const id = setInterval(() => {
    callback();
  }, 1000);

  //limpio el intervalo
  setTimeout(() => {
    clearInterval(id);
    console.log("Se detiene después de 5 segundos.");
  }, 5000);
}

//creo mi callback
const helloCallback = () => {
  console.log("Hello");
};

//llamo a la función
repeatHello(helloCallback);
