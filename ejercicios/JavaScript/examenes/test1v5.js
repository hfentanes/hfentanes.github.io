function mimumEven(number1, number2, number3) {

    //declaro mis variables
    let isEven;
    let minimo;

    //encuentro el más pequeño entre los 3 números
    minimo = Math.min(number1, number2, number3);

    //hago un analisis
    switch(minimo%2){
        case 0:
            isEven = true;
            console.log(`true (${minimo} is even)`);
            break;
        default:
            isEven = false;    
            console.log(`false (${minimo} is odd)`);
            break;
    }
    //return isEven ? true : false;
}

//sale en pantalla
mimumEven(1, 10, 33);      //falsa
mimumEven(80, 56, 14);     //verdadera
mimumEven(444, 0, 52);     //verdadera