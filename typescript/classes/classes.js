"use strict";
class Funcionario {
    constructor(nome, cargo, salario, empresa = "BASF") {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.empresa = empresa;
    }
}
const funcionario = new Funcionario("José", "Operador", 2000);
console.log('funcionario', funcionario);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    imprime() {
        return `O produto ${this.nome} custa ${this.preco} o preço com desconto é: ${this.calculaDesconto()}`;
    }
    //o uso do modificador public é opcional
    calculaDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const p1 = new Produto("Biscoito", 1.99);
p1.desconto = 0.2;
console.log('p1', p1);
console.log('p1', p1.imprime());
const p2 = new Produto("Bolacha", 1.99, 0.5);
console.log('p2', p2);
console.log('p2', p2.imprime());
