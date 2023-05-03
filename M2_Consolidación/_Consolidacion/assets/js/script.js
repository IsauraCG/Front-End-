// algunos elementos de ejemplo estan comentados

// obtener elementos con id tabla y id contenido
let tabla = document.getElementById("tabla");
let contenido = document.getElementById("contenido");
let carta = document.getElementById("carta");

// consumo de api con fetch
fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((data) => {
    // funcion mostrarTabla pero con los datos del fetch
    mostrarTabla(data);
  })
  // catch para mostrar error en caso de haberlo
  .catch((error) => console.log(error));

//funcion para obtener los datos del digimon y mostrarlo en la tabla
function mostrarTabla(response) {
  contenido.innerHTML = "";
  for (let temp of response) {
    // 'temp' es un objeto temporal que contiene los datos del digimon
    // ara poder después realizar la inserción dinámica de contenido
    contenido.innerHTML += `<td class="text-secondary fw-bold fs-3 align-middle">${temp.name}</td>
            <td class="align-middle text-center"><img src="${temp.img}" alt="" width="70px" height="70px"></td>
            <td class="text-uppercase text-center fs-5 text-primary align-middle">${temp.level}</td>
            `;
  }
}

//funcion mostrarCarta para obtener los datos del digimon y mostrarlo en la div con id carta
function mostrarCarta() {
  //obtener el valor del input con el id busqueda
  let busqueda = document.getElementById("busqueda").value.toLowerCase();
  console.log(busqueda);
  // consumo de api con fetch
  fetch(`https://digimon-api.vercel.app/api/digimon/name/${busqueda}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      construirCarta(data); // invocando la funcion construirCarta(data)
    })
    .catch((error) => console.log(error));
}

//funcion para crear (construir) la carta del digimon dinamicamente
function construirCarta(params) {
  //ocular tabla con id tabla y tbody con id contenido de la tabla
  document.getElementById("tabla").style.display = "none";
  tabla.innerHTML = "";
  contenido.innerHTML = "";
  carta.innerHTML = "";
  //ciclo para recorrer los datos obtenidos de la api
  for (let temp of params) {
    // inserción de contenido dinámicamente
    carta.innerHTML += ` 
            <div class="row row-cols-1 row-cols-md-2 justify-content-center g-4 border border-1 border-primary rounded-4 min-vw-50 max-vw-75">
                <img src="${temp.img}" class="card-img-top text-center" alt="...">
                <div class="card-body mx-5 mt-3 justify-content-center">
                    <h4 class="card-title fw-bold text-primary text-uppercase">${temp.name}</h4>
                    <h5 class="card-text fw-bold">NIVEL: <i class="fw-light text-text-capitalize">${temp.level}</i></h5>
                </div>
                <a class="btn btn-primary justify-content-center mb-5" href="index.html">VOLVER</a>
            </div>
            
            `;
  }
}
