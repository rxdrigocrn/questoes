// PRIMEIRA QUESTAO

let indice = 13;
let soma = 0;
let K = 0;

while (K < indice) {
    K = K + 1;
    soma = soma + K;
}

// console.log(soma);

// SEGUNDA QUESTAO

function fib(N) {
    let t1 = 0;
    let t2 = 1;

    while (t1 <= N) {
        if (t1 === N) {
            return true;
        }
        let temp = t2;
        t2 = t1 + t2;
        t1 = temp;
    }

    return false;
}
function verificarFibonacci(N) {
    if (fib(N)) {
        console.log(N + " pertence a Fibonacci.");
    } else {
        console.log(N + " não pertence a Fibonacci.");
    }
}
verificarFibonacci(9);


// QUESTAO 3

/*
a) 9
b) 128
c) 49
d) 100
e) 13
f) 20
*/

// QUESTAO 4



/*
Eu ligaria 2 interruptores primeiro para saber qual interruptor iria pertencer a lâmpada que
estaria desligada, sabendo disso dps iria so desligar um dos interruptores para descobrir a outra
e por fim a que sobrou eu saberia qual é, pois as outras 2 eu ja descobri.
*/


// QUESTAO 5

function reverse(str) {
    let novaString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }

    return novaString;
}

let stringOriginal = prompt("Digite uma string para inverter:")
let stringInvertida = reverse(stringOriginal);

console.log("String invertida:", stringInvertida);