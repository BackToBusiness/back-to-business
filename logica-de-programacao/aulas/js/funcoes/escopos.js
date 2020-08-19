//Exemplo de variável global
var x = "fora da função";

var f1 = function () {
    var x = "dentro da função f1";
};
f1();
console.log(x);
// → outside

var f2 = function () {
    x = "dentro da função f2";
};
f2();
console.log(x);
// → inside f2