/* Cuando programamos en JavaScript la ejecución de las instrucciones se realiza de manera lineal, 
es decir, desde la línea 1 hacia abajo. */

/* Para solucionar esta problemática existen las sentencias condicionales de control de flujo. 
Estas son sentencias (que comienzan siempre con una palabra reservada de JavaScript) 
que van a realizar la evaluación de una indicación y, en consecuencia de esa evaluación, 
administraran el flujo de ejecución del programa. */

/* CONDICIONAL IF
La condicional if (o si en español) se utiliza para ejecutar una instrucción si una condición lógica 
es verdadera (true). 
Utiliza opcionalmente la clausula else que permite indicar instrucciones a realizarse en caso de que 
la condición sea falsa (false). La sintaxis es la siguiente: */

/* 
if (condition) {
    // instrucciones a ejecutar si se cumple condición
} else {
    // instrucciones a ejecutar si la condición no cumple
} 
*/

/* Vamos a solicitar a un usuario que ingrese un número. Si el número ingresado es 1 ocurrirá una
instrucción especifica. Si ingresa cualquier otro número, ocurrirá otra instrucción. */

var numero = parseInt(prompt("Ingrese un número")); // así reducimos lineas de codigo, asignando y parseando los datos obtenidos

if (numero == 1) {
  //comenzamos con la evaluación de la condición
  // vamos a indicar que ocurrirá si el número almacenado en la variable número es 1
  alert("Seleccionaste el número 1. ¡GANASTE!");
} else {
  // utilizaremos la instrucción else para indicar que ocurrirá en caso de que el número ingresado sea distinto a 1.
  alert("Sigue participando");
}

/* para hacer la comparación utilizamos dos signos iguales, esto se llama
operadores de comparación */

/* SWITCH CASE
Continuando con las sentencias condicionales, vamos a conocer switch case, una instrucción que
permite que un programa evalúe una expresión y envíe el flujo del programa al case que coincida con
esa expresión. La sintaxis es la siguiente: */

/* 
switch (expresion) { // valor, expresión o llave que será el valor que se evalúa
    case 1: 
        // instrucciones
        break;
    case 2: 
        // instrucciones
        break;
    default:
        // instrucciones
        break;
} 
*/

/* La declaración break no es obligatoria, pero, en caso de no colocarla, el programa continuará el flujo
normal de ejecución, por lo tanto, se ejecutarán los siguientes case sin que hayan sido los
seleccionados por el usuario. */

var numero2 = parseInt(prompt("Ingrese un nuevo número"));
switch (numero2) {
  case 1: // define el valor del jumero ingresado, ejm: si ingresa "1"
    alert("la opción ingresada es 1");
    break;
  case 2:
    alert("la opción ingresada es 2");
    break;
  case 3:
    alert("la opción ingresada es 3");
    break;
  default:
    alert("La opción ingresada es distinto a 1, 2 o 3");
    break;
}
