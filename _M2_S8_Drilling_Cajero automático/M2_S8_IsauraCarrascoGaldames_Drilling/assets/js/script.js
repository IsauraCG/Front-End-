/*  Realizaremos un cajero automático en el cual el usuario deberá validar
    su identidad. Una vez que se valide la identidad el usuario podrá ver
    su saldo, realizar giros o depósitos. 
*/

// --------------------------------
/* REQUERIMIENTO :  
Cada uno de los clientes de nuestro banco contará con un nombre, un identificador (tipo rut), 
una clave y un saldo en su cuenta.
*/

// Se define la clase y el constructor de objetos tipo 'Cliente' para simular una BD que conetenga los datos de los clientes */
class Cliente {
  constructor(nombre, rut, clave, saldo) {
    this.nombre = nombre;
    this.rut = rut;
    this.clave = clave;
    this.saldo = saldo;
  }
}

// Se crean los objetos tipo 'Cliente' con sus valores correspondientes
var cliente1 = new Cliente("Fulanito", "27080900-1", "pass1", 30000);
var cliente2 = new Cliente("Juan", "27080900-2", "pass2", 40000);
var cliente3 = new Cliente("Maria", "27080900-3", "pass3", 50000);

// Se crea un arreglo que contiene a todos los clientes anteriormente creados
var listaClientes = [cliente1, cliente2, cliente3];

// --------------------------------
// MENSAJE DE BIENVENIDA //
alert("Bienvenido/a a CITYBANK");

// Se declaran e inicializan las variables que solicitan, mediante la función prompt,
// los datos 'rut' y 'clave' al usuario , y los almacenan como strings
var rutCliente = prompt("Ingrese su rut, sin puntos y con guión (Ejm: 12345678-9)");
var claveCliente = prompt("Ingrese su clave");

// variable booleana que indica el estado del usuario autorizado si es true, denegado si es false
var permiso = false;
// variable que almacena al cliente validado
var cliente;

// --------------------------------
// VALIDACIÓN DEL USUARIO EXISTENTE //
// --------------------------------
/* REQUERIMIENTO: 
Cuando se ingrese el identificador y la clave, se revisará si coincide con alguno de los clientes
registrados. Si no coincide, se mostrará un mensaje de error.
 */

for (let indice = 0; indice < listaClientes.length; indice++) {
  //Se recorre el arreglo con ciclo FOR

  //Se establece la condicional IF para validar si los datos coinciden o no con los de 'listaClientes'
  if (
    listaClientes[indice].rut == rutCliente &&
    listaClientes[indice].clave == claveCliente
  ) {
    // Si los datos coinciden:
    permiso = true; // El estado de permiso cambia a true
    console.log("Bienvenido Cliente"); //Se imprime mensaje de bienvenida en consola
    alert("Hola, bienvenido " + listaClientes[indice].nombre); // Se emite alerta de Bienvenida con nombre del usuario
    cliente = listaClientes[indice]; //Se almacenan los datos del cliente en var 'cliente'
    menu(cliente); //Se accede al menú de opciones
    break; //Se detiene el ciclo FOR
  } else {
    //Si los datos no coinciden:
    permiso = false; // Se mantiene el permiso en estado false

    //Se Ejecuta ciclo DO WHILE mientras los datos no coincidan, para solicitar nuevamente los datos
    do {
      console.log("Datos inválidos"); //Se imprime en consola mensaje de Error
      alert("Datos inválidos."); // Se alerta al usuario sobre el Error
      rutCliente = prompt("Ingrese nuevamente su rut"); // Se solicita 'rut' nuevamente
      claveCliente = prompt("Ingrese nuevamente su clave"); // Se solicita 'clave' nuevamente
    } while (
      listaClientes[indice].rut != rutCliente &&
      listaClientes[indice].clave != claveCliente
    );

    // Al ingresar datos coincidentes, se termina el ciclo anterior y:
    permiso = true; // El estado de permiso cambia a true
    console.log("Bienvenido Cliente"); //Se imprime mensaje de bienvenida en consola
    alert("Hola, bienvenido " + listaClientes[indice].nombre); // Se emite alerta de Bienvenida con nombre del usuario
    cliente = listaClientes[indice]; //Se almacenan los datos del cliente en var 'cliente'
    menu(cliente); //Se accede al menú de opciones
    break; //Se detiene el ciclo FOR
  }
}

// --------------------------------
/* REQUERIMIENTO:
Se muestra el menú que se repite hasta que el usuario selecciona Salir. 
Si ingresa un número distinto se envía un mensaje de error y se repite.
Si realiza giros o depósitos, su saldo se modificará.
 */

function menu(cliente) {
  let op = ""; //Se declara la variable 'op' para referirse a la opción del usuario

  do {
    // Ciclo DO WHILE que se ejecuta siempre que 'op' sea distinto de 4 (salir)

    op = prompt(
      //A la var 'op' se le asigna el valor solicitado mediante funcion prompt al usuario
      "Seleccione que desea hacer\n" +
        "1.- Ver saldo\n" +
        "2.- Realizar giro\n" +
        "3.- Realizar deposito\n" +
        "4.- Salir"
    );

    switch (
      op // mediante un SWITCH CASE vamos ejecutando las funciones para cada opción
    ) {
      case "1": //ver saldo
        //verSaldo()
        alert("Su saldo actual es: CLP$ " + cliente.saldo);
        break;

      /* ---------------------------------------------------------------- */
      /* CASE 2 - GIRAR */
      case "2": //realizar giro
        //realizarGiro()
        var montoGiro = parseInt(
          prompt(
            "Su saldo actual es: CLP$ " +
              cliente.saldo +
              "\n\nIngrese el monto que desea girar:"
          )
        );
        var saldoAntesGiro = parseInt(cliente.saldo);

        if (saldoAntesGiro >= montoGiro) {
          var saldoPosGiro = saldoAntesGiro - montoGiro;
          console.log(saldoPosGiro);
          alert("Tu nuevo saldo es: " + saldoPosGiro);
          cliente.saldo = saldoPosGiro;
        } else {
          console.log("Saldo insufuciente.");
          alert("Tus saldo es insufciente\npara realizar esta operación."); //salir
        }
        break;

      /* ---------------------------------------------------------------- */
      /* CASE 3 - DEPOSITAR */
      case "3": //realizar deposito
        var montoDepost = parseInt(
          prompt(
            "Su saldo actual es: CLP$ " +
              cliente.saldo +
              "\n\nIngrese el monto que desea depositar:"
          )
        );
        var saldoAntesDepost = parseInt(cliente.saldo);

        if (montoDepost > 0) {
          var saldoPosDepost = saldoAntesDepost + montoDepost;
          console.log(saldoPosDepost);
          alert("Tu nuevo saldo es: " + saldoPosDepost);
          cliente.saldo = saldoPosDepost;
        } else {
          console.log("Monto es 0 o menor");
          alert("No puedes hacer un depósito por CLP$ 0 ,\npor favor ingresa un monto superior a CLP$ 0."); //salir
        }
        break;

      /* ---------------------------------------------------------------- */
      /* CASE 4 - SALIR */
      case "4": // Si 'op' es "4", se imprime mensaje en consola y se muestra alerta con mensaje de despedida para el usuario
        console.log("Finalizado por usuario");
        alert("GRACIAS por su visita, adiós."); //salir
        break;
      default: //no se cumple ningun caso, mensaje de ERRor por dafault
        console.log("Opción no válida");
        alert("ERROR\n\nIngresa una opción válida, por favor.");
    }
  } while (op != "4"); //Mientras 'op' sea diferente de 4
}

function girar(cliente, montoGiro) {
  console.log(montoGiro);
}
