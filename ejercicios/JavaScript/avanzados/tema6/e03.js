//función para recuperar el Todo con ID 4
async function obtenerTodo() {
  try {
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/todos/4"
    );
    const todo = await respuesta.json();

    //crear elementos HTML
    const tituloEl = document.createElement("h2");
    tituloEl.textContent = todo.title;

    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.checked = todo.completed;

    //agregar elementos al contenedor
    const contenedor = document.getElementById("4");
    contenedor.appendChild(tituloEl);
    contenedor.appendChild(checkboxEl);

    console.log("Todo recuperado y elementos creados con éxito.");
  } catch (error) {
    console.error("Error al recuperar el Todo:", error);
  }
}

//llamada a la función para obtener y mostrar el Todo
obtenerTodo();
