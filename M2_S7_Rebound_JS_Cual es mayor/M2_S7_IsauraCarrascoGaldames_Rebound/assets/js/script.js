// Se declaran las variables, mediante la solicitud al usuario de los valores
// Y se usa parseInt para parsear valores, evaluar y operar con ellos

var numero1 = parseInt(prompt("Ingresa un número, por favor: "));
var numero2 = parseInt(prompt("Ahora ingresa otro número: "));

// Mostrar en consola los valores de las variables apra verificar ingreso
console.log("Primer numero: " + numero1);
console.log("Primer numero: " + numero2);

// Funcion para evaluar cual numero es mayor

if (numero1 > numero2) {
  // si la condicion se cumple, numero1 es mayor a numero2 y se muestra el mensaje
  alert(numero1 + " es mayor que " + numero2);
} else if (numero1 === numero2) {
  // si son estrictamente iguales, se muestra otro mensaje
  alert("Los números son iguales");
} else if (numero1 < numero2){ 
  // si numero2 es mayor que numero1, se muestra este otro mensaje
  alert(numero2 + " es mayor que " + numero1);
} else {
  // si no cumple las condiciones anteriores, se ejecuta este otro mensaje
  alert ("No se han ingresado valores válidos");
}
