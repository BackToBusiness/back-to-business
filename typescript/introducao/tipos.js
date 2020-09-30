"use strict";
let preco;
preco = 3.0;
let valor; //deixa flexível
//arrays
//let precos = [10, 20, 2.10]
let precos = [10, 20, 2.10];
console.log(precos);
console.log(typeof precos);
precos = ["Maria"];
console.log('precos', precos);
//tuplas
let tuplaExemplo = ["Aveia", 2.99];
console.log('tupla', tuplaExemplo);
tuplaExemplo = ["Biscoito", "Bolacha"];
console.log('tupla', tuplaExemplo);
let materiais = ["Biscoito", 2.99];
console.log('materiais', materiais);
//materiais =  ["Biscoito", "teste"]
materiais = ["Bolacha", 1.99];
console.log('materiais', materiais[0]);
//enums
var Status;
(function (Status) {
    Status[Status["Livre"] = 0] = "Livre";
    Status[Status["Alugado"] = 1] = "Alugado";
})(Status || (Status = {}));
console.log(Status.Alugado);
