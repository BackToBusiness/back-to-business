"use strict";
let produtos = {
    nome: "Biscoito",
    preco: 2.99
};
console.log('produtos', produtos);
produtos.nome = "Pão";
produtos.preco = 1.9; //não permite outro tipo. Ex: string
console.log(produtos);
