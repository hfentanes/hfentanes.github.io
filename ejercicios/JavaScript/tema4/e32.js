//creo la función 1 con un temporizador
function sayHelloName(callback) {
    setTimeout(function () {
    console.log("Hello");
    callback();
    }, 1000); //mil milisegundos me da un segundo
}

//creo la función 2 que depende de la 1
function printName () {
    console.log("Name");
}

//sale en la pantalla
sayHelloName(printName);