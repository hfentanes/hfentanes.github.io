//Creo la función 1
function sayHelloName(callback) {
    console.log("Hello ");
    callback();
}

//Creo la función 2
function printName () {
    console.log("Name");
}

//sale en la pantalla
sayHelloName(printName);