function domainGenerator () {

let pronounArray = ['the', 'our', 'my',];
let adjArray = ['great', 'big', 'awesome'];
let nounArray = ['jogger', 'racoon', 'website',];
let domainArray = ['.com', '.net', '.org',]

let = domainList = [];


  for (let pronoun of pronounArray) {
    for (let adj of adjArray) {
      for (let noun of nounArray) {
        for (let domain of domainArray) {
          domainList.push(`${pronoun}${adj}${noun}${domain}`);
        }
    }
  }
}

domainList.sort();

return domainList;

}

// Función para mostrar los dominios en la página
function showDomains() {
  let listaHTML = document.getElementById("lista-dominios");
  let dominios = domainGenerator();

  dominios.forEach(dominio => {  // para cada dominio...
      let li = document.createElement("li"); // Crear un elemento <li></li> en memoria, pero aún no en el DOM -->
      li.textContent = dominio; // Asignar el dominio como texto
      listaHTML.appendChild(li);  // Agregar <li> dentro del <ul>
  });
}

// Ejecutar la función cuando la página se cargue
window.onload = showDomains;