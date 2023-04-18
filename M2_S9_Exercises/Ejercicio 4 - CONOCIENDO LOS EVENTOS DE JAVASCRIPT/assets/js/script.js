/* S9 - JS EX 4 - Conociendo los eventos en Javascript */

/* Cada una de las etiquetas HTML tiene su propia lista de posibles eventos que se le pueden asignar,
sin embargo, conoceremos una lista con los eventos más importantes en JavaScript */

/* En el HTML tendremos dos <div> id “caja1” y “caja2” respectivamente. 
Dentro tendremos etiquetas <p> con algún texto.
Incorporaremos, desde Bootstrap, dos botones y finalmente un tercer <div> con texto en <h2>. */

/* Ahora, incorporaremos nuestro primer evento. Podemos observar que el <div> “caja2” lo hemos
dejado oculto, utilizando la propiedad “display: none” de CSS. Lo que haremos, será que al momento
de pasar el cursor del ratón por sobre el primer <div> “caja1” se mostrará el mensaje del segundo
<div>.

--> Onmouseover
Para eso, vamos a incorporar al primer <div> el evento 'onmouseover', que, como se explica en nuestra
tabla, activa alguna acción cuando el mouse “entra” al elemento.

Para activar una acción, vamos a hacer uso de una función que indique que acción realizar. 
La llamaremos mostrarMensaje(). --> HTML línea 20

Ahora, nos dirigimos a nuestro archivo JavaScript y en él creamos la función mostrarMensaje(), con
la cual indicaremos que el elemento de id “caja2” será mostrado, esto cambiando el display a block
(lo contrario a none).*/

function mostrarMensaje() {
  document.getElementById("caja2").style.display = "block";
}

/* A esta altura, podrás notar que el problema es que, si dejamos un elemento oculto, probablemente
es porque no queremos que se vea en todo momento y ahora, después de pasar por encima del
elemento “caja1” el elemento “caja2” se muestra en todo momento.

Esto lo solucionaremos incorporando un nuevo evento al <div> “caja1”. Para esta ocasión
incorporaremos el evento onmouseout, que se activa cuando el ratón sale del elemento.

Para indicar la acción a realizar, vamos a crear una nueva función que se llamará ocultarMensaje(),
quedando de la siguiente manera. */

function ocultarMensaje() {
  document.getElementById("caja2").style.display = "none";
}

/* A los botones les daremos la posibilidad de modificar el texto que aparece justo abajo.
A ambos botones le colocaremos el evento onclick. 
Éste nos permite activar el evento al hacer click sobre un elemento.

Crearemos dos funciones, una para cada botón:
El primero será cambiarFondo() y lo usaremos para cambiar el background del <div> ID “contenido”. 
El segundo será cambiarTexto(), cuya función será modificar el texto que se encuentra en el <h2> ID“texto”.  

Utilizaremos, para el método cambiarFondo() backgroundColor. Y para cambiarTexto() usaremos
innerHTML.*/

function cambiarFondo() {
  document.getElementById("contenido").style.backgroundColor = "coral";
}
function cambiarTexto() {
  document.getElementById("texto").innerHTML = "Éste es el nuevo texto";
}

/* Ondbclick
Vamos a realizar un último evento, en el primer botón: 
Incorporaremos el evento 'ondbclick'. Este método se activa con un doble clic sobre el elemento. 
Al realizar el doble clic llamaremos al método volver() y vamos a crearlo en nuestro JavaScript. 
Éste nos permitirá volver a colocar el color original.  */

function volver() {
  document.getElementById("contenido").style.backgroundColor = "darksalmon";
}

function volver2() {
  document.getElementById("texto").innerHTML =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae unde accusamus quibusdam, maxime sint, a rem autem veniam quod sunt explicabo eligendi maiores porro tempore tenetur quas incidunt laboriosam? Minus.";
}
