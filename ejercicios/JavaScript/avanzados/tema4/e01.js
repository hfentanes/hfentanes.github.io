//mi función con Hello
function printAsyncName(callback, name) {
  setTimeout(() => {
    console.log("Hello");
    callback(name);
  }, 1000);
}

//mi función con el nombre
function callbackFunction(name) {
  setTimeout(() => {
    console.log(name);
  }, 2000);
}

//sale en pantalla
printAsyncName(callbackFunction, "Josué");
