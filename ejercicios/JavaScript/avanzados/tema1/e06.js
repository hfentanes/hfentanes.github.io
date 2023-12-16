//mi closure con funciones anidadas
function printName() {
  const helloName = "Hello John";

  function inner() {
    return helloName;
  }

  console.log(inner());
}

//sale en panatlla
printName();
