/*
esta funcion da error para numeros 2
function generarFizzBuzz(numero)
{
    if(numero = 3 || numero % 3 == 0){
        return "Fizz"
    }
    else{
        return numero+"";
    }    

    //if(numero % 3 == 0 && numero % 5 ==0)
            {
                return "FizzBuzz"
            }
}*/


function generarFizzBuzz(numero)
{
    if(numero % 3 == 0 && numero % 5 == 0)
    {
        return "FizzBuzz"
    }
    else{
        if(numero === 3 || numero % 3 == 0){
            return "Fizz"
        }else{
            if(numero === 5 || numero % 5 == 0){
                return "Buzz"
            }
        }
    }
    /*
    if(numero === 3 || numero % 3 == 0){
        return "Fizz"
    }else{
        if(numero === 5 || numero % 5 == 0){
            return "Buzz"
        }
    }*/
    return numero+"";    
}
/*
function generarSecuenciaHasta(){
    return "1 2 Fizz 4"
}*/

function generarSecuenciaHasta(numero) {
    let resultado = "";
    for(let i = 1; i <= numero; i++) {
        resultado += generarFizzBuzz(i);
        if(i < numero) {
            resultado += " "; // Añade un espacio entre los elementos
        }
    }
    return resultado;
}


/*
primera version corresta
function generarFizzBuzz(numero)
{
    if(numero === 3){
        return "Fizz"
    }
    return numero+"";     gf
}*/

export {generarFizzBuzz,generarSecuenciaHasta};