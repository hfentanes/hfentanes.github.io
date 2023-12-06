//datos
let name = 'José';
let surname = 'Rossi';

//sale en pantalla
if (name && surname) {
    let fullname = name + " " + surname;
    console.log(`El nombre completo es: ${fullname}.`);
    } else {
    console.log("Full name is invalid.");
    }