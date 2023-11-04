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
let resultados =definirNumero(numero)

document.write(resultados)