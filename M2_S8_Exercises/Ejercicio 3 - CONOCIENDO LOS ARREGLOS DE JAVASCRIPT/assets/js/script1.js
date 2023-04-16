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
      "\nRecorriendo paises :\n \nFOR el índice [" +
        i +
        "] el país es: " +
        paises[i]
    );
  } else {
    alert("No hay más países");
  }
}

/* FOR OF
Dentro de for, existe 'for of' que ejecuta un bloque de código para cada elemento de un 
objeto iterable. 
*/

for (let pais of paises) {
  console.log(pais);
  // para cada elemento del arreglo paises se ejecuta el console.log
  // además de la siguiente alerta para el usuario
  alert("FOR elemento: ['" + pais + "'] OF arreglo paises.");
}

/* FOR IN 
Es para recorrer objetos. Como por ejemplo:
 */

// ---- El objeto 'objetoEjemplo' ----
var objectoEjemplo = {
  //objeto de tipo JSON
  a: 1, // key:value
  b: 2,
  c: 3,
};

for (const key in objectoEjemplo) {
  alert(objectoEjemplo[key]); // muestra el 'value' de cada 'key' de cada elemento en el objetoEjemplo
}
// imprime: 1, 2 y 3

/* AÑADIR UN ELEMENTO AL PRINCIPIO DEL ARREGLO
Utilizando el método unshift() el elemento añadido ocupa el índice cero, desplazando al resto un
lugar:
 */
paises.unshift("Uruguay", "México", "Taiwan");
console.log(paises);
alert(
  "UNSHIFT añade nuevos elementos al inicio : \n \n " +
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
  "SHIFT elimina elementos del inicio : \n \n " +
    paises +
    "\n \n El ARRAY hora tiene " +
    paises.length +
    " elementos."
);

/* AÑADIR ELEMENTO AL FINAL DEL ARREGLO
En este caso se usa la instrucción .push, desplazando el resto de los elementos de lugar:
*/

paises.push("Perú", "Bolivia");
console.log(paises);
alert(
  "PUSH añade elementos al final : \n \n" +
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
  "POP elimina elementos desde el final: \n \n " +
    paises +
    "\n \n El ARRAY hora tiene " +
    paises.length +
    " elementos."
);

/* ENCONTRAR EL INDICE DE UN ELEMENTO DENTRO DEL ARREGLO  */

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
console.log(elementoEliminado);
alert(
  "SPLICE elimina un elemento según su índice : \n \n El elemento eliminado es : [" +
    elementoEliminado +
    "] \n que estaba en el indice [" +
    pos +
    "]"
);

/* CREANDO UN ARRAY A PARTIR DE ELEMENTOS ELIMINADOS : SPLICE
Con .splice() no solo se puede eliminar elementos del array, si no que también podemos extraerlos 
guardándolo en un nuevo array. ¡Ojo! que al hacer esto estaríamos modificando el array de origen. */

var index = 1,
  numElementos = 2; // define variables para aplicar en 'splice' elementosEliminados'
var elementosEliminados = paises.splice(index, numElementos);
// Lo que se ha guardado en "elementosEliminados" son 2 elementos a partir del indice 1
console.log(paises);

alert(
  "SPLICE extrae varios elementos según su índice : \n \nLos elementos eliminados son  : " +
    elementosEliminados +
    "\n \nEl nuevo ARRAY queda : [" +
    paises +
    "]"
);

/* FILTER - EXTRAER UN ARRAY DE ELEMENTOS FILTRADOS DE UN ARRAY EXISTENTE
  Suponga que tiene una matriz de objetos que contiene detalles de los usuarios, como el nombre, la edad y la ocupación. 
  Puede decidir filtrar por usuarios cuya edad coincida con una condición específica.
 */

  let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]

/* El filter()método es un método ES6 que proporciona una sintaxis más limpia para filtrar a través de una matriz. 
Devuelve nuevos elementos en una nueva matriz sin alterar la matriz original. 
Ahora realicemos el mismo ejemplo filtrando al usuario por su agey occupation:
*/

let filteredUsers = users.filter((user) => {
  return user.age > 40 && user.occupation === 'programmer';
});

console.log(filteredUsers);

/* Esto devolverá el resultado exacto, pero notará que su código está bastante limpio. 
También es importante saber que puede volver a escribir el código anterior con una línea y quitar la returndeclaración: */

filteredUsers = users.filter(user => user.age > 40 && user.occupation === 'programmer');
console.log(filteredUsers);