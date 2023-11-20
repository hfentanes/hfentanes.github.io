//mi primer objeto
let user = {
    name: "Cosimo",
    age: 30,
};

//creo un nuevo objeto con las mismas keys
let newUser = {};
for (let key in user) {
    newUser[key] = user [key];
}

//cambio la propiedad "nombre" del nuevo objeto
for (name in newUser) {
newUser.name = "Paolo";
}

//sale en la pantalla
console.log(newUser);
console.log(user);