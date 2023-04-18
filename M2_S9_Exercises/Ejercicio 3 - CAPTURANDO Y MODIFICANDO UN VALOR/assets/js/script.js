/* S9 - JS EX 3 - Capturando y modificando un valor */

/* Mantenemos la estructura de nuestro HTML, capturaremos el valor de un elemento y lo
modificaremos.

En JavaScript vamos a capturar el dato correspondiente al id “párrafo”, declarando una variable para
almacenarlo y dándole un nuevo valor de inmediato, con el uso de la propiedad innerHTML. 
Provocando que, al momento de abrir nuestro archivo en el navegador o actualizarlo, el texto se
encuentre modificado. */

var texto = document.getElementById("parrafo").innerHTML="Nuevo texto";

/* 
En alternativa podemos utilizar el elemento innerText:

        var texto = document.getElementById("parrafo").innerText="Nuevo texto"; */

/* Podemos observar que quizás no es muy práctico realizar una modificación de un elemento de esta
forma, pero para solucionar aquello y realizar la modificación de elementos posterior a la interacción
del usuario con nuestra página web, trabajaremos con eventos. */