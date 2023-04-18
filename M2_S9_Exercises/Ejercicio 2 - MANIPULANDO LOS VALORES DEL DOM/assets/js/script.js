/* Manipulando valores del DOM */

/* Vamos a observar, a través de un ejemplo, cómo podemos crear un nodo o, 
en otras palabras, crearemos una etiqueta desde nuestro JavaScript que insertaremos en el HTML. */

/* document.createElement --> crea un elemento HTML especificado por su tagName
Es importante destacar que este elemento solo se crea en memoria.
Normalmente se asigna a una variable, pero no pertenece al DOM, no forma parte de los nodos hasta
que lo indiquemos posterior a su creación.
Crearemos un elemento <p>, colocando el tagName entre comillas en el paréntesis */

var creandoElemento = document.createElement("h5");

/* TEXT CONTEXT
Posterior a eso, indicaremos el texto que la etiqueta llevará, utilizando la propiedad textContent: */

creandoElemento.textContent = "Este nodo fue creado desde JavaScript";

/* appendChild
Finalmente, incorporamos el nodo al HTML, para eso, usaremos la propiedad appendChild.
Este método cumple la función de agregar un elemento al final de la lista de hijos de un elemento
padre previamente especificado, es decir, agrega un elemento, pero al final de la lista completa de
hijos que ese padre tenga.
Para entenderlo mejor, cada elemento dentro del DOM tiene un padre, por tanto, es hijo de algo.
'html' es el padre de todos y tiene como hijos a 'head' y 'body', que, a su vez, tiene como hijos todos
los nodos creados en él como, por ejemplo, en el 'head' un hijo es el 'title.

Para el caso de nuestro ejemplo, incorporaremos el nodo en el <body>, por lo que escribiremos:
*/

document.body.appendChild(creandoElemento);

/* element.append 
Podemos crear un Nodo e incorporarlo al DOM utilizando la propiedad element.append, la cual nos
permite agregar más de un nodo. 

Modifiquemos nuestro ejemplo. Utilizaremos 'querySelector' para seleccionar una 'class' y dentro de
ese elemento, como su hijo, incorporaremos la misma <p> creada previamente.*/

var selectorVarios = document.querySelector(".contenedor");
var creandoElemento = document.createElement("p");
creandoElemento.textContent = "Este otro nodo fue creado desde JavaScript";
selectorVarios.append(creandoElemento);

/* removeChild. 
Para eliminar un Nodo podemos hacer uso de la propiedad 'removeChild'. 
Este método cumple la función de eliminar el Nodo hijo, siempre siendo hijo directo del Nodo al cual se hace referencia.
Eliminaremos la etiqueta <p> con id “párrafo”, hijo del <div> con clase “contenedor”. */

var nodoPadre = document.querySelector(".contenedor");
var nodoHijo = document.querySelector("#parrafo");
nodoPadre.removeChild(nodoHijo);
// document.querySelector(".contenedor").removchild(document.querySelector("#parrafo"));

