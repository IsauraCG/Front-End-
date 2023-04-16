/* Cada uno de los clientes de nuestro banco contará con un nombre, un identificador, una clave y un
saldo en su cuenta. */

class Cliente {
  // creacion de un constructor para la creación de objetos de tipo cliente
  constructor(nombre, rut, clave, saldo) {
    //declara la incialización de variables
    this.nombre = nombre;
    this.rut = rut;
    this.clave = clave;
    this.saldo = saldo;
  }
}

// creación de los clientes usando el constructor de 'Cliente'
var cliente1 = new Cliente("Camila Fernandez", "12345678-2", "Pass123#", 30000);
var cliente2 = new Cliente("Fernanda Marín", "12345678-0", "Pass456#", 50000);
var cliente3 = new Cliente("Tito Astudillo", "12345678-1", "Pass789#", 60000);

// Lista de tamaño 3 con 3 elementos
var clientes = [cliente1, cliente2, cliente3 ];
console.log(clientes);

// MENSAJE DE BIENVENIDA //

/* alert ("Hola, Bienvenido/a a CITYBANK."); */

var rutCliente = prompt ("ingrese rut");
var claveCliente = prompt ("ingrese clave");

var valido = clientes.indexOf(rutCliente,claveCliente); 

console.log(valido);

/* if (valido == -1) {
    console.log ("Rut o Clave inválidos");
    alert ("Rut o Clave inválidos\nPor favor ingrese sus datos nuevamente.");
    rutCliente = prompt ("ingrese rut");
    claveCliente = prompt ("ingrese clave");

} else if (valido != -1){
    alert ("Bienvenido");
} else {
    alert ("ERROR");
} */






