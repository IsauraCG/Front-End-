/* DOM, Nodos y selectores básicos */

/* Todo comienza con un proceso conocido como Critical Rendering Path, en el cual los navegadores
convierten en pixeles aquel código que hemos escrito en nuestros archivos JavaScript, HTML y CSS.
En este paso el navegador crea dos Arboles:
    • DOM: representación del HTML. Su estructura en forma de árbol contiene nodos, además, 
    es dinámico.
    • CSSOM: Conjunto de APIs que permite manipular CSS desde JavaScript. Permite leer y modificar 
    el estilo de CSS de forma dinámica.

El DOM este compuesto por nodos, donde cada nodo son etiquetas HTML y el CSSOM hace su parte
con la manipulación de estilos. */

// LEER NODOS //

/* Document.getElementById ---> obtenelemento por ID
Nos permite obtener un elemento del DOM a través de su ID.
Para este caso, el nodo retornado del HTML es único, ya que el ID debiese ser único.
 */

var selectorId = document.getElementById("parrafo");

/* Document.getElementsByTagName ---> Obten elemento por etiqueta HTML
Nos permite obtener una lista con todos los nodos que
tienen definida la etiqueta proporcionada. Puede obtener, 0, 1 o N nodos.
 */

var selectorEtiqueta = document.getElementsByTagName("h1");

/* Document.getElementsByClassName ---> Obten elemento por nombre de clase CSS
Retorna una lista de una clase especifica. Es decir,
traemos todos los elementos que contengan dicha clase.  
*/

var selectorClass = document.getElementsByClassName("contenedor");

/* Document.querySelector ---> selecciona el primer elemento que encuentre coincidente
Nos permite obtener cualesquiera elementos del DOM de acuerdo con el argumento que le indiquemos. 
Si varios elementos coinciden con la búsqueda, retornará el primero que encuentre. 
Si no encuentra ningún elemento coincidente, retornara null. 
Para este caso, debemos especificar el símbolo del selector, similar como ocurre con CSS, 
por clase será (“.clase”), ID (“#id”) y por etiqueta (“h1”)
*/

var selectorVarios = document.querySelector(".contenedor");

/* Document.querySelectorAll  ---> selecciona todos los elementos coincidentes
Devuelve una lista de cualquier elemento del DOM que coincida con el argumento que le indiquemos.
 */

var selectorTodos = document.querySelectorAll(".contenedor");

/* innerHTML  ---> obtiene y / o cambia el contenido de un elemento HTML
La propiedad innerHTML establece o devuelve el contenido HTML (HTML interno) de un elemento. 
 */
var selectorId2 = document.getElementById('parrafo').innerHTML;
document.getElementById("demo").innerHTML = "I have changed!";


/* innerText   --->  obtiene el texto interno de un elemento
La propiedad innerText establece o devuelve el contenido de texto de un elemento.
Cuando establece la propiedad innerText, todos los nodos secundarios se eliminan y se reemplazan 
por un solo nodo de texto nuevo.

Para devolver el contenido de texto de un elemento o nodo: */

let btntext = document.getElementById('boton').innerText;
document.getElementById("btntext").innerHTML = btntext;

/* Para establecer el contenido de texto de un elemento o nodo: */

let btn2text = document.getElementById('boton2').innerText = "Btn 2";

/* textContent ---> establece o devuelve el contenido de texto del elemento
El textContent propiedad establece o devuelve el contenido de texto del nodo especificado y todos sus 
descendientes.
Cuando establece la propiedad textContent, todos los nodos secundarios se eliminan y se reemplazan 
por un solo nodo de texto nuevo. Devuelve 'null' si el elemento es un documento, un tipo de documento 
o una notación.

Devuelve el contenido de texto de un nodo:
 */
let text2 = element.textContent;

/* Establecer el contenido de texto de un nodo:  */

element.textContent = text // -> Devuelve el contenido de texto de un elemento
element.textContent = "I have changed!"; // -> Cambie el contenido textual de un elemento <p> con id="demo":
let text = document.getElementById("myList").textContent; 
// Obtenga todo el contenido textual de un elemento <ul> con id="myList":


