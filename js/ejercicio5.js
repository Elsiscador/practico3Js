//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
// sólo por minúsculas o por una mezcla de ambas.

let fraseIngresada = prompt("Ingresa una frase")

function verificacionFrase(frase){
    if(frase === frase.toLowerCase()){
        document.write(`La Frase: ${frase} esta en minuscula`);
    }else if(frase === frase.toUpperCase()){
        document.write(`La Frase: ${frase} esta en Mayuscula`);
    }else{
        document.write(`La Frase: ${frase} es una mezcla Mayuscula y  minuscula`);
        
    }
}

verificacionFrase(fraseIngresada)