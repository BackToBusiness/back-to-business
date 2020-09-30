"use strict";
function getNome() {
    return "Marcos";
}
function printMessage() {
    console.log("Imprimindo a mensagem");
}
function soma(num1, num2) {
    return num1 + num2;
}
getNome();
printMessage();
soma(1, 2);
//tipo função
let sum;
sum = soma;
console.log('sum', sum(2, 1));
