//defino la contraseña y los parámetros aceptables
let password = "test";
let length = password.length;
let A = length >= 4;
let B = length <= 6;

//evaluo si la contraseña es valida
if (A && B) {
    console.log("Password length is correct.");
} else console.log ("Password not valid.");