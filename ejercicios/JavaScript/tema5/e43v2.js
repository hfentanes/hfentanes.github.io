//tengo mi objeto inicial
const student = {
    id: 1,
    school: "Liceo",
    year: 3,
    //le añado otro objeto
    personalData: {
        name: "Juán",
        surname: "Alvarez",
        age: 17
    }
}

//compruebo si existe la clave personalData con un ternario
let printPersonalData = student.personalData ? student.personalData : console.error("Clave no encontrada.");

//sale en la pantalla
console.log(printPersonalData);