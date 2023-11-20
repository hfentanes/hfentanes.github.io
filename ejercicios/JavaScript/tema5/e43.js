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

//sale en la pantalla
console.log(student?.personalData);

//pongo una interrogación al lado de mi objeto
//inicial solamente por comprobar si existe