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
      let li = document.createElement("li"); // Crear un elemento <li></li> en memoria, pero no en el DOM aún...
      let link = document.createElement("a") // crear un elemento <a>

      link.textContent = dominio; // hace que el texto del link sea el dominio
      link.href = `https://${dominio}`; // crea el link completo
      link.target = "_blank"; // lo abre en una pestaña nueva
      link.classList.add("enlace-dominio"); // Agrega una clase "enlace-dominio" para dar estilo con CSS

      li.appendChild(link); // agrega <a> dentro de <li>
      listaHTML.appendChild(li);  // Agregar <li> dentro del <ul> a través de listaHTML que, a su vez, toma el id "lista-dominios" del HTML
  });
}

// Ejecutar la función cuando la página se cargue
window.onload = showDomains;