//Abordagem estruturada - dados e funções independentes
//possuo os dados
var produto = {
    nome: "Sabonete",
    preco: 2.99
}

//possuo a função
let calculaDesconto = (valorDoDesconto) => {
    //faz o calculo
    return valorDoDesconto;
}

calculaDesconto(0.1)

//Em POO
// dados e comportamentos andam juntos
var produto = {
    nome: "Sabonete",
    preco: 2.99,
    calculaDesconto(valorDoDesconto) {
        return this.preco - this.preco * valorDoDesconto;
    }
}

console.log(produto.calculaDesconto(0.1))