/* === SENTENCIAS CICLICAS ===  */

/* FOR
For es una sentencia cíclica que crea un bucle que consiste en tres expresiones opcionales,
encerradas en paréntesis y separadas por punto y coma.
Cuenta con un valor de inicio, un valor final y una instrucción de aumento o decremento.
 */

var numero = parseInt(prompt("Sentencia 'FOR' : Ingrese un número para incrementar"));

// Vamos a solicitar un número y la instrucción se repetirá la misma cantidad de veces que el número indicado.
for (var inicio = 1; inicio <= numero; inicio++) {
  console.log(inicio);
}

/* Si observamos nuestro código, indicamos una variable de nombre “inicio” cuyo valor es 1. Luego,
como valor de salida, indicamos que el ciclo se repetirá siempre y cuando la variable “inicio” sea igual
o menor al número ingresado por el usuario. Finalmente, indicamos que la variable “inicio” se
incrementará de uno en uno, es decir, si el usuario ingresa 5, comenzará en 1 y terminará teniendo el
valor 5.
 */

/* WHILE
While es una sentencia cíclica de control de flujo o bucle que se ejecuta mientras cierta condición se
evalúe como verdadera. La condición siempre se evaluará antes de que se ejecute la sentencia por
lo que, si se evalúa como falsa la primera vez, no se ejecutará el bloque de instrucciones dentro de
while ninguna vez.
La sintaxis es la siguiente: */

        /* while (condition) {
          // instrucciones
        } */

/* En el paréntesis
escribiremos la condición, para este caso, evaluaremos que un número sea menor a 10. Se imprimirá
el número mientras sea menor a 10.
Debemos tener la precaución de indicar un incremento, puesto que, si el número ingresado no se
incrementa, entraremos en un bucle infinito */

var numero2 = parseInt(prompt("Sentencia 'WHILE' : Ingresa un número menor que 10"));

/* Si ingresamos un número menor a 10, pero olvidamos colocar la instrucción numero = numero + 1;
entraremos en un ciclo infinito que no terminará jamás.
 */

while (numero2 < 10) {
  console.log(numero2);
  numero2 = numero2 + 1;
}

/* DO WHILE
Do while es una sentencia cíclica conocida como “hacer mientras”. Crea un bucle que ejecuta una
sentencia hasta que la condición evaluada se evalúe como falsa.
A diferencia de while, este ciclo primero ejecuta la instrucción y después evalúa la condición, por lo
que incluso si la primera vez la condición no se cumplía, se va a ejecutar siempre al menos una vez.
La sintaxis es la siguiente: 

            do {
              
            } while (condition);
  */

var numero3 = parseInt(prompt("Sentencia 'DO WHILE' : Ingresa número menor que 10 "));
do {
  console.log(numero3);
  numero3 = numero3 + 1;
} while (numero3 < 10);


