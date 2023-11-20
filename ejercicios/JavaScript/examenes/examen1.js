//tengo mi función
function factorial(number1) {

    //primero creo una variable para que sea mi factorial
    let F = 1;

    //ahora creo un loop for para que me calcule el factorial
    for (let i = 1; i <= number1; i++) {
        F *= i;
    }

    //retorno el valor del factorial
    return F;
}

//sale en la pantalla
console.log(factorial(3));