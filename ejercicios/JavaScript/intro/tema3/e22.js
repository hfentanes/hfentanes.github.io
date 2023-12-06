//mi variable
let primitive = "texto";
let type = typeof(primitive)
let text;

//evaluando mi variable
switch(type) {
    case "number":
        text = "Es un número.";
        break;
    case "string":
        text = "Es una cadena.";
        break;
    case "boolean":
        text = "Es un boleano.";
        break;
    default:
        text = "Error!";
        break;
}

//sale en la pantalla
console.log(text);