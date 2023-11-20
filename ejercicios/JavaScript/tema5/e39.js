//MI EXPLICACIÓN:
//en el codigo original teníamos que "newUser = user", y esto
//hacía con que los dos objetos tuvieran la misma referencia
//así que "newUser" no era un objecto independiente y mis dos
//objetos cambiarían a la vez siempre que intentara cambiar algo

//mi primer objeto
let user = {
    name: 'Cosimo',
    age: 30,
};

//hago una copia del primer objeto
let newUser = {...user};

//cambio la propiedad "nombre" del nuevo objeto
newUser.name = 'Paolo';

//sale en la pantalla
console.log(newUser);
console.log(user);

//estuve buscando cómo hacer copias de objetos en Javascript
//encontré algunos de los modos posibles en el sitio web de abajo
//https://www.shecodes.io/athena/2245-common-methods-to-copy-an-object-in-javascript#:~:text=There%20are%20multiple%20ways%20to,parse(JSON.