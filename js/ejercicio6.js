// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)
// Ejemplo:
// Input:
// lado A = 24
// lado B = 5
// Output: 58

function calcularPerimetro(a,b){
    return  2*(a + b)
};
let ladoA = parseInt(prompt("Ingrese el primer Lado del cuadrado"));

while(isNaN(ladoA)){
    ladoA = parseInt(prompt('No ingresaste un numero vuelve a intentarlo:'))
}
let ladoB = parseInt(prompt("Ingrese el segundo Lado del cuadrados"));

while(isNaN(ladoB)){
    ladoB = parseInt(prompt('No ingresaste un numero vuelve a intentarlo:'))
}

document.write(`El perimetro del cuadrado es: ${calcularPerimetro(ladoA,ladoB)}`);