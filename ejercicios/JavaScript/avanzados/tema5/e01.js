//creo una función asíncrona
async function lista() {
  try {
    //llamo los datos de la API
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");

    //creo un nuevo error
    if (!respuesta.ok) {
      throw new Error("Error al llamar los datos de la API");
    }

    //creo una promesa que llama la respuesta y pasa a json
    const toDos = await respuesta.json();

    //imprimo en pantalla
    console.log("Lista de to-dos:", toDos);

    //por si me sale algún error
  } catch (error) {
    console.error("Error:", error.message);
  }
}

//llamo a la función
lista();
