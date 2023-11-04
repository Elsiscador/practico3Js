// Crear un script que solicite al usuario mediante un prompt el nombre
// de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar
// debe mostrar el arreglo generado, luego realizar las siguientes acciones:

let ciudades = [];

while (ciudades) {
  let ciudad = prompt("Ingrese el nombre de una ciudad o presione cancelar para finalizar:");
  
  if (ciudad === null) {
    break;
  }
  
  ciudades.push(ciudad);
}

document.write('<ul>')
document.write("El Arreglo de ciudades tiene : " +  ciudades.length + "<br>");
document.write("<li>Elemento de 1er posicion: "+ ciudades[0] + " <br></li>");
document.write("<li>Elemento de 3er posicion: "+ ciudades[4] + " <br></li>");
document.write("<li>Elemento de la ultima posicion: "+ ciudades [ciudades.length - 1] + " <br></li>");

ciudades.push('paris')
document.write("<li>Elemento de la ultima posicion: "+ ciudades[ciudades.length -1] + " <br></li>");
document.write("<li>Elemento de 2er posicion: "+ ciudades[1] + " <br></li>");

document.write("</ul>");

ciudades[1] = "Barcelona";
document.write("<ul>");
document.write("<li><h2>El Arreglo Generado es:</h2></li>");
for (let i = 0; i < ciudades.length; i++) {
  document.write("<li>" + ciudades[i] + "</li>");
}

document.write("</ul>");
