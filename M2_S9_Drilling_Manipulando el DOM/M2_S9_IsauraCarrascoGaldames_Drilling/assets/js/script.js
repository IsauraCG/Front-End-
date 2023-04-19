/* M2_S9_Drilling - Manipulando el DOM */

/* REQUERIMIENTOS
En pantalla pequeña, los formularios quedan ocultos a la vista. Al hacer clic en el enlace al formulario
para comunicarse con nuestra tienda o al de reserva, deberá desplegar el formulario para que
podamos completarlo. Solo se mostrará el formulario que el usuario necesita utilizar. 

Además, al momento de querer enviar un formulario, se capturarán los datos enviados por el usuario
y se mostrará un mensaje en agradecimiento al envió de su formulario.*/

function mostraFormContactoSm() {
    document.getElementById("contacto").style.display = "block";
  }

  function mostraFormReservasSm() {
    document.getElementById("caja2").style.display = "block";
  }

alert ("Muchas gracias $(usuario), hemos recibido su sugerencia y\nenviaremos una pronta respuesta al email ingresado: $(email)")

/* Si los datos no están completos, se mostrará un mensaje: */

alert ("El campo $(nombre) es obligatorio,\npor favor, ingresa todos los datos correctamente");