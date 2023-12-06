function mimumEven(number1, number2, number3) {

    //encuentro el más pequeño entre los tres números
    switch(true) {
        case number1 <= number2 && number1 <= number3:
            minimo = number1;
            break;
        case number2 <= number1 && number2 <= number3:
            minimo = number2;
            break;
        default:
            minimo = number3;
            break;
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