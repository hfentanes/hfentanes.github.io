//El usuario mete los nombres a través de PROMPTs (he descubierto esta función)
let firstName = prompt('Primer nombre: ');
let middleName = prompt('Segundo nombre (opcional): '); //por si la persona tiene dos nombres, ejemplo: María José
let lastName = prompt('Primer apellido: ');

//La variable fullName que era obligatória en el enunciado
let fullName = (middleName) ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;

//Comparo el resultado con el de mi "banco de dados" hipotético
if (fullName === 'José Luis Rossi') {
    alert(`Datos correctos: El nombre completo es ${fullName}.`);
} else {
    if (firstName !== 'José') {
        alert("El primer nombre no es correcto.");
    }
    if (middleName !== 'Luis') {
        alert("El segundo nombre no es correto.");
    }
    if (lastName !== 'Rossi') {
        alert("El apellido no es correcto.");
    }
}