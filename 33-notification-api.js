// Notificación API
// La notification API es una interfaz del navegador que permite a las aplicaciones web mostrar notificaciones nativas del sistema operativo, incluso cuando la pestaña NO esta activa.

const button = document.querySelector(".button");

button.addEventListener("click", () => {
    console.log("you made click");
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification ("Esta es una notificación"), {
                body : "Aprendiendo JS en el SENA"
          }
        }else{
            console.log("permiso denegado");
             }   
  });
}); 