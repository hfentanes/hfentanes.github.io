//creo mi función
function saveData(userObject) {
  try {
    const userData = JSON.stringify(userObject);
    localStorage.setItem("user", userData);
    console.log("Datos salvados con éxito.");
  } catch (error) {
    console.error("Error al salvar:", error);
  }
}

//objeto del enunciado
const user = {
  id: 1,
  name: "John",
  age: 25,
};

//llamo a la función
saveData(user);
