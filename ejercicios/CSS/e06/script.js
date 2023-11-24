document.addEventListener("DOMContentLoaded", function () {
    var opciones = document.querySelector(".dropdown");
    var bloqueOpciones = opciones.children[1];
    var timeoutId;
  
    opciones.addEventListener("mouseover", function () {
      clearTimeout(timeoutId);
      bloqueOpciones.style.display = "block";
      bloqueOpciones.style.opacity = 1;
      bloqueOpciones.style.transform = "translateY(2px)";
    });
  
    opciones.addEventListener("mouseleave", function () {
      timeoutId = setTimeout(() => {
        bloqueOpciones.style.opacity = 0;
        bloqueOpciones.style.transform = "translateY(0px)";
        setTimeout(() => {
          bloqueOpciones.style.display = "none";
        }, 100);
      }, 200);
    });
  
    bloqueOpciones.addEventListener("mouseover", function () {
      clearTimeout(timeoutId);
    });
  
    bloqueOpciones.addEventListener("mouseleave", function () {
      timeoutId = setTimeout(() => {
        bloqueOpciones.style.opacity = 0;
        bloqueOpciones.style.transform = "translateY(0px)";
        setTimeout(() => {
          bloqueOpciones.style.display = "none";
        }, 100);
      }, 200);
    });
  });
  