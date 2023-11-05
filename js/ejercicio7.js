// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada 
// con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

document.write("<h2>Ejercicio 7</h2>")

function laTabla(numberTabla, number){
    return numberTabla*number
}

let numeroUsuario = parseInt(prompt("Ingresá un número"));

while(isNaN(numeroUsuario)){
    numeroUsuario = parseInt(prompt("No ingresaste un número, intenta nuevamente"))
}

document.write("<table>")
document.write("<tr><th>Tabla</th><th>Resultado</th></tr>")

for(let i=1; i<=10; i++){
    // console.log(laTabla(i, 4))
    document.write(`<tr><td>${i} X ${numeroUsuario}</td><td>${laTabla(i, numeroUsuario)}</td></tr>`)
}

document.write("</table>")


document.write("<hr>")


