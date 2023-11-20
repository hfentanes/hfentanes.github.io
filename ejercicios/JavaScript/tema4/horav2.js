//creo una función que me imprima horas, minutos y segundos
function imprimirHorario() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    return `${horas}:${minutos}:${segundos}`;
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