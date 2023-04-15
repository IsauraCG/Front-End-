/* POO - Primer objeto */

/* CREANDO UN AUTO

Contendrá:
  - Atributos como: color, número de puertas y marca
  - Funciones: acelerar y frenar

Para crear el objeto comenzamos declarando una variable usando var y colocamos el nombre del
objeto el cual será “auto”.
Continuamos indicando que será un objeto escribiendo la instrucción new Object()
*/

var auto = new Object();

/* Luego, incluiremos cada uno de los atributos de nuestro auto (color, número de puertas y marcas)
describiendo el objeto y su atributo más el dato.
 */

auto.color = "Rojo";
auto.numeroPuertas = 4;
auto.marca = "Samsung";

/* Finalmente, agregaremos las funciones acelerar() y frenar(). Ambos métodos solo van a mostrar un
mensaje en la consola. */

auto.acelerar = function () {
  console.log("El auto aceleró");
};
auto.frenar = function () {
  console.log("El auto frenó");
};

/* imprimiremos el objeto completo */

console.log(auto);

// Podemos llamar la función del objeto:

auto.frenar();

// Finalmente, veamos el valor de uno los atributos específicamente:

console.log(auto.marca);

/* Con esto hemos creado nuestro primer objeto, pero, veamos otra forma de definir este mismo objeto.

  Vamos a modificar nuestro objeto. 
  Crearemos una lista delimitada por comas de pares de propiedades y valores asociados y todo, encerrado por llaves. */

var auto = {
  color: "Verde",
  numeroPuertas: 5,
  marca: "Mustang",

  acelerar: function () {
    console.log("El auto aceleró");
  },

  frenar: function () {
    console.log("El auto frenó");
  },
};

// Para imprimir los mismos valores, usamos las mismas sentencias.

console.log(
  " Color: " +
    auto.color +
    "\n N. de puertas: " +
    auto.numeroPuertas +
    "\n Marca: " +
    auto.marca
);
auto.acelerar();
auto.frenar();

/* FUNCIÓN CONSTRUCTORA
Podemos definir un tipo de objeto creando una función para el objeto que especifique su nombre,
propiedades y métodos.
Continuemos con el ejemplo del auto. El tipo de objeto será Auto y mantendrá las propiedades que
escribimos en el ejemplo anterior. Para definir la función constructora la sintaxis será la siguiente:
 */

function Auto(color, numeroPuertas, marca) {
  this.color = color;
  this.numeroPuertas = numeroPuertas;
  this.marca = marca;
}

/* This se utiliza para asignar valores a las propiedades del objeto en función de los valores pasados a
la propia función. Para crear objetos de tipo Auto usaremos la indicación new, de la siguiente manera:
 */

var miAuto1 = new Auto("Rojo", 4, "Nissan");
var miAuto2 = new Auto("Negro", 2, "Suzuki");

console.log(
  " Color: " +
    miAuto1.color +
    "\n N. de puertas: " +
    miAuto1.numeroPuertas +
    "\n Marca: " +
    miAuto1.marca
);
console.log(
  " Color: " +
    miAuto2.color +
    "\n N. de puertas: " +
    miAuto2.numeroPuertas +
    "\n Marca: " +
    miAuto2.marca
);

// De esta forma hemos creado distintos objetos a partir de un mismo “molde”

/* OBJETOS COMO PROPIEDADES DE OBJETOS
Los objetos pueden tener dentro de sus propiedades o atributos, un objeto completo, es decir, no
solo puede almacenar un String o un numérico si no, un valor que representa todo un objeto con sus
propios atributos. Veámoslo en el siguiente código:
 */

function Auto(color, numeroPuertas, marca, conductor) {
  this.color = color;
  this.numeroPuertas = numeroPuertas;
  this.marca = marca;
  this.conductor = conductor;
}
function Conductor(nombre, licencia, edad) {
  this.nombre = nombre;
  this.licencia = licencia;
  this.edad = edad;
}

/* Hemos incorporado a Auto el atributo conductor y hemos creado una función constructora de
Conductor con sus atributos propios.
Ahora creamos un objeto Conductor.
 */

var conductor1 = new Conductor("Luis Ochoa", "Clase B", 28 + " años.");
var conductor2 = new Conductor("Carol Reyes", "Clase A", 55 + " años.");
console.log(conductor1);

/* Y finalmente usamos este objeto “conductor1” como valor del atributo conductor de los objetos Auto
creados. */

var miAuto1 = new Auto("Rojo", 4, "Nissan", conductor1);
var miAuto2 = new Auto("Negro", 2, "Suzuki", conductor2);

// imprimimos las características de cada objeto auto creado
console.log(
  " Color: " +
    miAuto1.color +
    "\n N. de puertas: " +
    miAuto1.numeroPuertas +
    "\n Marca: " +
    miAuto1.marca +
    "\n Conductor: " +
    miAuto1.conductor.nombre +
    " , " +
    miAuto1.conductor.licencia +
    " , " +
    miAuto1.conductor.edad
);
console.log(
  " Color: " +
    miAuto2.color +
    "\n N. de puertas: " +
    miAuto2.numeroPuertas +
    "\n Marca: " +
    miAuto2.marca +
    "\n Conductor: " +
    miAuto2.conductor.nombre +
    " , " +
    miAuto2.conductor.licencia +
    " , " +
    miAuto2.conductor.edad
);

/* Ahora, para ver cómo se almacena este objeto dentro del otro, imprimamos en la consola el objeto
“miAuto1”. */

console.log(miAuto1);

/* AGREGAR ATRIBUTO A UN OBJETO
Cuando trabajamos con objetos, definimos sus atributos, pero siempre se pueden agregar nuevas
propiedades o atributos al objeto previamente definido.
Al objeto miAuto1 le agregaremos un nuevo atributo: patente.
 */

miAuto1.patente = "AKGT-15";

// veamos ahora que pasó con ambos objetos, imprimamos cada uno de ellos

console.log(miAuto1);
console.log(miAuto2);

/* Al agregar un atributo al objeto auto1, este se agrega solo al objeto que indicamos y 
no afecta al resto de los objetos. */


/* EJERCICIO

Solicitaremos al usuario una opción y dependiendo de su opción le mostraremos una alerta con los 
datos de los objetos creados que correspondan a su opción elegida*/

var choice = prompt("Por favor elige un auto \n\n 1 - Auto 1 \n 2 - Auto 2 ");
console.log ("La opción escogida fue: " + choice);
do {
  switch (choice) {
    case "1":
      alert(
        " Color: " +
          miAuto1.color +
          "\n N. de puertas: " +
          miAuto1.numeroPuertas +
          "\n Marca: " +
          miAuto1.marca +
          "\n Patente: " +
          miAuto1.patente +
          "\n Conductor: " +
          miAuto1.conductor.nombre +
          " , " +
          miAuto1.conductor.licencia +
          " , " +
          miAuto1.conductor.edad
      );
      break;
  
    case "2":
      alert(
        " Color: " +
          miAuto2.color +
          "\n N. de puertas: " +
          miAuto2.numeroPuertas +
          "\n Marca: " +
          miAuto2.marca +
          "\n Conductor: " +
          miAuto2.conductor.nombre +
          " , " +
          miAuto2.conductor.licencia +
          " , " +
          miAuto2.conductor.edad
      );
      break;
  
    default:
      alert ("Por favor ingresa una opción válida");
      break;
  }
} while (choice === 1 || choice === 2);


