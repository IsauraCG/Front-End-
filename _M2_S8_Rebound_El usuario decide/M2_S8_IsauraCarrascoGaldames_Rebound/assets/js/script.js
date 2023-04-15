// MENU DE OPCIONES //

/* Realizar un menú con 7 opciones y, evaluando
la opción ingresada, enviará una respuesta distinta.  */

// Declaración de variables globales
var opc, num1, num2;

// Establecer el menu
do {
  opc = prompt(
    "Seleccione que desea hacer: \n" +
      "1.- Calcular cual número es mayor\n" +
      "2.- Sumar\n" +
      "3.- Restar\n" +
      "4.- Multiplicar\n" +
      "5.- Dividir\n" +
      "6.- Mostar los números ingresados\n" +
      "7.- Salir"
  );

  /* Solicitar los valores para las funciones */
  if (opc != 7 && opc > 0 && opc < 7) {
    // si el usuario ingresa opc entre 1 y 6
    num1 = parseInt(prompt("Ingresa un número"));
    num2 = parseInt(prompt("Ingresa otro numero"));
  }

  opc = parseInt(opc);

  /*  Switch Case - para las ejecutar según opción ingresada*/
  switch (opc) {
    case 1: // Muestra cuál es el numero mayor
      mayor(num1, num2);
      break;

    case 2: // Suma los numeros ingresados
      sumar(num1, num2);
      break;

    case 3: // Resta los numeros ingresados
      restar(num1, num2);
      break;

    case 4: // Multipla los numeros ingresados
      multiplicar(num1, num2);
      break;

    case 5: // Divide los numeros ingresados
      dividir(num1, num2);
      break;

    case 6: // Muestra los numero ingresados
      mostrar(num1, num2);
      break;

    case 7: //Salir de la ejecución del menú
      alert("Gracias por participar \n " + "Vuelve pronto, te esperamos :)");
      break;

    default: //opcion por default
      alert("Elección incorrecta. Adios!");
      break;
  }
} while (opc != 7);

// Funcion: Cual es el Mayor
function mayor(num1, num2) {
  if (num1 > num2) {
    alert("El número " + num1 + " es mayor que el número " + num2);
  } else if (num1 < num2) {
    alert("El número " + num2 + " es mayor que el número " + num1);
  } else if (num1 == num2) {
    alert("Los número ingresados son iguales");
  } else {
    alert("No se han ingresado valores válidos");
  }
}

// Funcion: Sumar
function sumar(num1, num2) {
  var suma = num1 + num2;
  alert(num1 + " + " + num2 + " = " + suma);
}

// Funcion: Restar
function restar(num1, num2) {
  var resta = num1 - num2;
  alert(num1 + " - " + num2 + " = " + resta);
}

// Funcion: Multiplicar
function multiplicar(num1, num2) {
  var producto = num1 * num2;
  alert(num1 + " x " + num2 + " = " + producto);
}

// Funcion: Dividir
function dividir(num1, num2) {
  while (num2 === 0) {
    alert ("No podemos dividir por '0'\n\nPor favor, ingresa los valores nuevamente. ");
    num1 = parseInt(prompt("Ingresa un número"));
    num2 = parseInt(prompt("Ingresa otro numero"));
  }
  let cociente = num1 / num2;
  alert(num1 + " / " + num2 + " = " + cociente);
}

// Funcion: Mostrar los números
function mostrar(num1, num2) {
  alert("Los números ingresados son: " + num1 + " y " + num2);
}

// Opcion con if else //

/*   
if (opc === 1) { mayor(num1, num2); 
} else if (opc === 2) { sumar(num1, num2);
} else if (opc === 3) {restar(num1, num2);
} else if (opc === 4) {multiplicar(num1, num2);
} else if (opc === 5) {dividir(num1, num2);
} else if (opc === 6) {mostrar(num1, num2);
} else {alert("Ingresa una opción válida");
} 
*/
