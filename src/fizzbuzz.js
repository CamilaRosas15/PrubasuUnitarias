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
}*/


function generarFizzBuzz(numero)
{
    if(numero === 3 || numero % 3 == 0){
        return "Fizz"
    }
    return numero+"";    
}

/*
primera version corresta
function generarFizzBuzz(numero)
{
    if(numero === 3){
        return "Fizz"
    }
    return numero+"";    
}*/

export default generarFizzBuzz;