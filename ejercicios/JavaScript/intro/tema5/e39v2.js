//MÉTODOS OPCIONALES con "Object.assign({}, objetoOriginal)"
//(me gusta más el de los puntos suspensivos porque parece más simples)

//mi primer objeto
let user = {
    name: "Cosimo",
    age: 30,
};

//hago una copia del primer objeto
let newUser = Object.assign({}, user);

//cambio la propiedad "nombre" del nuevo objeto
newUser.name = "Paolo";

//sale en la pantalla
console.log(newUser);
console.log(user);