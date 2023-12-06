//importo la librería Moment
const moment = require('moment');       //ya la instalé en mi ordenador con "npm install moment"

//Creo una función para imprimir la hora con Moment
function imprimirHorario() {
    const now = moment();               //obtengo la hora actual
    return now.format('HH:mm:ss');      //formateo la hora
}
  
//inicializo un contador para llevar el seguimiento del tiempo transcurrido
let tiempoTranscurrido = 0;

//creo un intervalo que se ejecuta cada 1 segundo
let intervalo = setInterval(function () {
tiempoTranscurrido += 1;
console.log(imprimirHorario());
  
//detengo el intervalo después de 10 segundos
if (tiempoTranscurrido >= 11) {
      clearInterval(intervalo);
      console.log("Intervalo detenido después de 10s.");
    }
}, 1000);