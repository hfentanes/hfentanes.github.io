//mi closure con funciones anidadas
function printName() {
  const helloName = "Hello John";

  function inner() {
    setTimeout(() => {
      console.log(helloName);
    }, 1000); //timeout con 1s
  }

  return inner;
}

//sale en panatlla
printName()();
