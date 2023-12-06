//se elige el tipo de habitación
let room = "junior SUITE Room"; //se me entiende hasta el "peor" de los casos
let A = room.toLowerCase();
let text;

//evaluo el precio según el tipo
switch(A) {
    case "basic":
    case "basic room":
        text = "The price for the Basic Room is 50€.";
        break;
    case "junior":
    case "junior suite":
    case "junior suite room":
        text = "The price for the Junior Suite Room is 80€.";
        break;
    case "master":
    case "master room":
        text = "The price for the Master Room is 100€.";
        break;
    default:
        text = "Invalid room type.";
        break;
}

//sale en la pantalla
console.log(text);