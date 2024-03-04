//mi variable
let primitive = 2;
let type = typeof(primitive)
let text;

//evaluando mi variable
if (type=="number"){
text = "Es un número.";
    } else if (type=="string"){
    text = "Es una cadena.";
        } else if (type=="boolean"){
        text = "Es un boleano.";
            } else {
            text = "Error!";
            }

//sale en la pantalla
console.log(text);