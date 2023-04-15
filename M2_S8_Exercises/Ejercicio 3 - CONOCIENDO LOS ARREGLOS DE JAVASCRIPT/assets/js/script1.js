/* QUE ES UN ARRAY

Array es un objeto global de JavaScript que es usado en la construcción de arreglos, que son objetos
de tipo lista de alto nivel.
Comenzaremos creando un arreglo, para eso, definimos el nombre y, entre corchetes, agregamos los
datos de la lista.
Para este ejemplo, el arreglo países cuenta con tres datos de tipo String dentro de él.
Para imprimir el arreglo completo, simplemente lo enviaremos a la consola.
 */

var paises = ["Chile", "Argentina", "Paraguay"];
console.log(paises);
alert("El ARRAY contiene los siguientes elementos : \n \n [" + paises + "]");

/* CONSEGUIR EL LARGO DE UN ARREGLO
Para obtener el largo de un arreglo usaremos la propiedad length.
 */
var largoDelArray = paises.length;
console.log(largoDelArray);
alert(
  "LENGTH del array es : " +
    largoDelArray +
    "\n Es decir, tiene " +
    largoDelArray +
    " elementos."
);

/* ACCEDER A UN ELEMENTO DEL ARREGLO POR SU INDICE
Para poder acceder a un valor especifico dentro del arreglo, podemos hacerlo mediante su índice,
por ejemplo, para mostrar Argentina:
 */
var indice1 = paises[1];
console.log(indice1);
alert("El país en el indice [1] es: " + indice1);

/* RECORRER UN ARREGLO UTILIZANDO FOR
Para recorrer un arreglo elemento por elemento y poder acceder a cada dato como un elemento
separado utilizaremos un ciclo iterativo.

Debemos comenzar siempre por el índice cero para poder ingresar a cada uno de los datos: */
for (let i = 0; i < paises.length; i++) {
  // imprime en consola cada elemento mientras lo va recorriendo
  console.log("Indice " + [i] + " es: " + paises[i]);
  // opciones que muestra al usuario como alerta

  if (i <= 2) {
    alert(
      "\n Recorriendo el ARRAY: \n \n El índice [" + i + "] es: " + paises[i]
    );
  } else {
    alert("No hay más países");
  }
}

/* AÑADIR UN ELEMENTO AL PRINCIPIO DEL ARREGLO
Utilizando el método unshift() el elemento añadido ocupa el índice cero, desplazando al resto un
lugar:
 */
paises.unshift("Uruguay","México","Taiwan");
console.log(paises);
alert(
  "UNSHIFT añade un nuevo elemento al principio : \n \n " +
    paises +
    "\n \n El ARRAY hora tiene " +
    paises.length +
    " elementos."
);

/* ELIMINAR EL PRIMER ELEMENTO DE UN ARREGLO
Por el contrario, si deseamos eliminar el primer elemento de un arreglo podemos hacerlo usando la
función shift().
*/
paises.shift();
console.log(paises);
alert(
  "SHIFT elimina el primer elemento : \n \n " +
    paises +
    "\n \n El ARRAY hora tiene " +
    paises.length +
    " elementos."
);

/* AÑADIR ELEMENTO AL FINAL DEL ARREGLO
En este caso se usa la instrucción .push, desplazando el resto de los elementos de lugar:
*/

paises.push("Perú");
console.log(paises);
alert(
  "PUSH añade un nuevo elemento al final : \n \n" +
    paises +
    "\n \n El ARRAY hora tiene " +
    paises.length +
    " elementos."
);

/* ELIMINAR EL ULTIMO ELEMENTO DE UN ARREGLO
Para eso usaremos la función pop(): */
paises.pop();
console.log(paises);
alert(
  "POP elimina el último elemento : \n \n " +
    paises +
    "\n \n El ARRAY hora tiene " +
    paises.length +
    " elementos."
);

/* ENCONTRARA EL INDICE DE UN ELEMENTO DENTRO DEL ARREGLO  */

var pos = paises.indexOf("Chile"); // (pos) es la posición para abreviar
console.log(pos);
alert(
    "INDEX OF encuentra el índice de un elemento : \n \n  El índice de 'Chile' es : " +
    pos
);

/* ELIMINAR UN ÚNICO ELEMENTO MEDIANTE SU POSICIÓN
Eliminamos "Chile" del array pasándole dos parámetros: 
la posición del primer elemento que se elimina 
y la cantidad de elementos que queremos eliminar. 

De esta forma, .splice(pos, 0) empieza en la posición que nos indica el valor de la variable 'pos' 
y elimina 1 elemento. 
En este caso, como pos vale 0, elimina un elemento comenzando en la posición 1 del array, es decir "Chile".
 */

var elementoEliminado = paises.splice(pos, 1);
console.log (elementoEliminado);
alert(
  "SPLICE elimina un elemento según su índice : \n \n El elemento eliminado es : [" + 
  elementoEliminado + "] \n que estaba en el indice [" + pos + "]"
)

/* CREANDO UN ARRAY A PARTIR DE ELEMENTOS ELIMINADOS : SPLICE
Con .splice() no solo se puede eliminar elementos del array, si no que también podemos extraerlos 
guardándolo en un nuevo array. ¡Ojo! que al hacer esto estaríamos modificando el array de origen. */

var index = 1, numElementos = 2 // define variables para aplicar en 'splice' elementosEliminados'
var elementosEliminados = paises.splice(index, numElementos);
// Lo que se ha guardado en "elementosEliminados" son 2 elementos a partir del indice 1
console.log(paises);

alert(
  "SPLICE extrae varios elementos según su índice : \n \n Los elementos eliminados son  : " + 
  elementosEliminados + "\n \n El nuevo ARRAY queda : [" + paises + "]"
)