//Escribir el código de una función a la que se pasa como parámetro un número
//entero y devuelve como resultado una cadena de texto que indica si el número es 
//par o impar. Mostrar por pantalla el resultado devuelto por la función
function definirNumero(numero){

         if(isNaN(numero) ){

        return 'Ingresa un numero valido'
    }
    if(numero % 2 ===0 ){

       return 'el numero es par'
    }else{

       return 'el numero es impar'
    }

}
let numero=parseInt(prompt('ingrese un numero'))
let resultado =definirNumero(numero)

document.write(resultado)