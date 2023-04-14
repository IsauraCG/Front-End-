/*
Considerando los conocimientos en este CUE realizaremos un cajero automático en el cual el
usuario deberá validar su identidad.
Una vez que se valide la identidad el usuario podrá ver su saldo, realizar giros o depósitos.
REQUERIMIENTOS
Cada uno de los clientes de nuestro banco contará con un nombre, un identificador, una clave y un
saldo en su cuenta.
Cuando se ingrese el identificador y la clave, se revisará si coincide con alguno de los clientes
registrados. Si no coincide, se mostrará un mensaje de error.
Si los datos coinciden se ingresará a un menú en el cual el usuario podrá decidir que desea hacer
(deposito, giro, ver su saldo o salir). El menú se repite hasta que el usuario elija salir.
Si realiza giros o depósitos, su saldo se modificará.

*/

/* Cada uno de los clientes de nuestro banco contará con un nombre, un identificador, una clave y un
saldo en su cuenta. */

class Cliente {// declaracion de clases: mayusculas y con {};
    // creacion de un constructor para la creación de objetos de tipo cliente , para nuevos clientes
    constructor(nombre,rut,clave,saldo){
        //declara la incialización de variables
        this.nombre = nombre
        this.rut = rut
        this.clave = clave
        this.saldo = saldo
    }
}; 

// creación de los clientes (de un nuevo objeto a través del new)
var cliente1 = new Cliente("Pedro","1234567789","MAt9876#",30000);
var cliente2 = new Cliente("Ana","234567891","Pass9876#",50000);
var cliente3 = new Cliente("Juan","345678901","Word9876#",60000);

//Lista de tamaño 3 con 3 elementos
var listaClientes = {cliente1,cliente2,cliente3}

//Pedir ingreso de datos, identificador y claves
alert("Bienvenido a BancoPlop");
var rutCliente = prompt("Ingrese rut sin guion, ejm: 123456789");
var claveCliente = prompt("Ingrese su clave");

// validacion
for (let index = 0; index < listaClientes.length; index++) {

}
