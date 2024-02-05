//función para guardar datos en localStorage
function saveData(userObject) {
  try {
    const userData = JSON.stringify(userObject);
    localStorage.setItem("user", userData);
    console.log("Datos salvados con éxito.");
  } catch (error) {
    console.error("Error al salvar:", error);
  }
}

//función para recuperar datos de localStorage y mostrarlos en la consola
function retrieveAndPrintData() {
  try {
    const userData = localStorage.getItem("user");

    if (userData) {
      const parsedUser = JSON.parse(userData);
      console.log("Datos recuperados con éxito:", parsedUser);
    } else {
      console.log("No hay datos guardados en localStorage.");
    }
  } catch (error) {
    console.error("Error al recuperar los datos:", error);
  }
}

//objeto del enunciado
const user = {
  id: 1,
  name: "John",
  age: 25,
};

//llamada a la función para guardar datos en localStorage
saveData(user);

//llamada a la función para recuperar y mostrar los datos
retrieveAndPrintData();
