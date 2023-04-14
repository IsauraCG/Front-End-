
/* Funcion mostrar #text2 */
function mostrar() {
  document.getElementById("text2").style.display = "block";
}

/* Funcion ocultar #text2 */
function ocultar() {
  document.getElementById("text2").style.display = "none";
}

/* Funcion agrandar #img imagen */
function agrandar() {
  document.getElementById("caja2").style.width = "500%";
}

/* Funcion achicar #img imagen */
function achicar() {
  document.getElementById("caja2").style.width = "100%";
}

/* Funcion cambiar estilo del texto #caja3 al boble click */
document.getElementById("caja3").addEventListener("dblclick", 
function fontSize () {
    if (this.style.fontSize === '100%') {
        this.style.fontSize = '200%';
    } else {
        this.style.fontSize = '100%';
    }
});

/*
Obtener anchura para validar o almacenar valor

var anchura
function agrandar() {
    anchura = document.getElementById("img").offsetWidth
    document.getElementById("img").style.width = "100%"
}

function achicar(){
    console.log(anchura)
    document.getElementById("img").style.width = anchura
}
*/

/*  ==== USANDO EVENT LISTENER ==== 
document.getElementById('caja2').addEventListener('click', 
    function() { 
        if (this.style.transform === 'scale(2)') 
            { this.style.transform = 'scale(1)'; } 
            else { this.style.transform = 'scale(2)'; } 
        }
    );
*/

/*  ===== UNA SOLA FUNCIÓN ====

function achicaAgranda() {
    var imagen = document.getElementById("img");
    if (imagen.style.width === "100%") {
      imagen.style.width = "20%"; // achica la imagen
    } else {
      imagen.style.width = "100%"; // agranda la imagen
    }
  }
*/
