//creo una función que me imprima horas, minutos y segundos
function imprimirHorario(){
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    return `${horas}:${minutos}:${segundos}`;
}

//sale en pantalla (con un intervalo de 1 segundo entre cada hora)
setInterval(function () {
    console.log(imprimirHorario());
    }, 1000);