//creo la función asíncrona
async function crearPost() {
  //llamos los datos de la API
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";

    //creo un objeto con los datos que me pide
    const nuevoPost = {
      title: "Nuevo post",
      completed: false,
    };

    //creo una promesa con el método que me pide
    const respuesta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoPost),
    });

    //creo un nuevo tipo de error
    if (!respuesta.ok) {
      throw new Error("Error al crear el nuevo post");
    }

    //creo una promesa que pasa los datos de la API a un json
    const postCreado = await respuesta.json();

    //imprimo en la pantalla
    console.log("Nuevo post creado:", postCreado);

    //por si algo sale mal
  } catch (error) {
    console.error("Error:", error.message);
  }
}

//llamo a la función
crearPost();
