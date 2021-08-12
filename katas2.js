// comece a criar a sua função add na linha abaixo
function add (x,y){
    let soma = x + y;
    return  soma;
}


// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(x,y){
    let multiplicacao = 0
    for (let count = 0; count < y; count++){
        multiplicacao = add (x,multiplicacao);
    } 
    return multiplicacao; 
}


// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');



// comece a criar a sua função power na linha abaixo
function power(x,n){
    let resultado = 1
    for(let count = 0; count < n; count++){
        resultado = multiply(x,resultado);
              
    }
    return resultado;
}


// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(x){
    let resultado = 1;
    for (let count = x; count > 0; count--){
        resultado = multiply(resultado,count);
              
    }

    return resultado;        

}


// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
