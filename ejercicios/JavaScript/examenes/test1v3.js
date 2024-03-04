function mimumEven(number1, number2, number3) {

    //encuentro el más pequeño entre los tres números
    let minimo = number1;

    if (number2 <= minimo) {
        minimo = number2;
    }

    if (number3 <= minimo) {
        minimo = number3;
    }

    //hago un analisis del minimo
    switch (minimo) {
        case 0:
            console.log(`true (we consider ${minimo} as even)`);
            break;
        default:
            let esPar = minimo % 2 === 0;
            esPar ? console.log(`true (${minimo} is even)`) : console.log(`false (${minimo} is odd)`);
    }
}

//sale en pantalla
mimumEven(1, 10, 33);      //falsa
mimumEven(80, 56, 14);     //verdadera
mimumEven(444, 0, 52);     //verdadera