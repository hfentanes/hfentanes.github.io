//se elije el tipo de habitación
let room = "basic";
let text;

//evaluo el precio según el tipo
switch(room) {
    case "basic":
        text = "The price for the Basic Room is 50€.";
        break;
    case "junior":
        text = "The price for the Junior Suite Room is 80€.";
        break;
    case "master":
        text = "The price for the Master Room is 100€.";
        break;
    default:
        text = "Invalid room type.";
        break;
}

//sale en la pantalla
console.log(text);