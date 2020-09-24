import {
    Produto
} from './produto.js';

class Carrinho {
    constructor(produto) {
        this._produto = produto
    }

    adicionaProduto() {
        let produtos = []
        produtos.unshift(new Produto("Chocolate", 3.00))
        produtos.unshift(new Produto("Biscoito", 2.50))
        return produtos
    }

    exibeCarrinho() {
        return new Carrinho(this.adicionaProduto())
    }
}
console.log(new Carrinho().exibeCarrinho())