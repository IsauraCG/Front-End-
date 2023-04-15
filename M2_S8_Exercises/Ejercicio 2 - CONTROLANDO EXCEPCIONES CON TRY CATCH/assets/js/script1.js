/* TRY CATCH
Try Catch es un bloque de instrucciones que declara una instrucción para cuando todo sale bien, es
decir, para intentar que el código se ejecute correctamente (try) y un bloque de instrucciones para
ejecutarse cuando ocurra una excepción (catch).
 */

var numero4 = parseInt(prompt("Sentencia 'TRY CATCH' : Ingresa el número 7"));
try {
  if (numero4 != 7) {throw new Error("El número no es 7")
} else {
  alert ("ACERTASTE!!")
}
} catch (error) {
  console.log(error.name, error.message);
  alert ("El número no es 7")
}
console.log("continua la ejecución del programa");
alert ("GRACIAS.\n ¡Adios!")
