class Pessoa {
    constructor(nome, sobrenome, telefone) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._telefone = telefone;
    }

    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }
    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }

    get telefone() {
        return this._telefone;
    }
    set telefone(telefone) {
        this._telefone = telefone;
    }

    caminhar() {
        console.log(`O ${this.nome} está caminhando...`);
    }
    pedalando() {
        console.log(`O ${this.nome} está pedalando...`);
    }
    comendo() {
        console.log(`O ${this.nome} está comendo...`);
    }
}

class Pet {
    constructor(nome, raca, idade) {
        this._nome = nome;
        this._raca = raca;
        this._idade = idade;
        this._tipo = 'cachorro';
    }

    get nome() {
        return this._nome;
    }
    set nome(nome) {
        return this._nome;
    }

    get raca() {
        return this._raca;
    }

    get idade() {
        return this._idade;
    }
    set idade(idade) {
        return this._idade;
    }

    latindo() {
        console.log(`O ${this.nome} está latindo...`);
    }
}

//Objetos nada mais é que uma coleção dinâmica de pares chave e valor;
//Exemplo:
const produto = new Object();
produto.nome = "Caneta";
produto.preco = 2.00
//outra forma
produto['fabricante'] = 'Bic' //Eu consigo adicionar de forma dinâmica
console.log(produto);
delete produto['fabricante'];
console.log(produto);

//Outra forma de criar um objeto porém de forma literal
const produtoSimples = {
    nome: 'Caneta',
    preco: 2,
    fabricante: 'Bic'
}

//Mais complexto, com associação. Objetos que possuem outros objetos
const produtoComAssociacao = {
    nome: 'Caneta',
    preco: 2.00,
    fabricante: {
        nome: 'Bic',
        enderecos: [{
            rua: 'Rua 10',
            bairro: 'Centro',
            telefones: [{
                telefone: '11-99999-9999',
                celular: '11-89899-0000',
                ramal: '456'
            }]
        }, {
            rua: 'Rua 11',
            bairro: 'Aquarius',
            telefones: [{
                telefone: '11-99999-9999',
                celular: '12-89899-0000',
                ramal: '123'
            }]
        }]
    }
}
console.log(produtoSimples)
console.log(produtoComAssociacao)

//Outra maneira de instanciar objetos
const pessoa = {};
pessoa.nome = "Marcos";
console.log(pessoa)
console.log(typeof(pessoa))

//Outra maneira é usando funções construtoras
function Dog(raca){
    this.raca = raca;
}

const rex = new Dog('Poodle');
console.log(rex)

//Instanciando as Classes criadas
const p1 = new Pessoa()
//setando os valores atraves dos métodos set
p1.nome = "Marcos Paulo"
console.log(p1)
console.log(p1.nome)//imprimindo através do método get

//setando através do metodo contrutor da classe
const p2 = new Pessoa("Ana", "Soares", "12-99999-0000")
console.log(p2)