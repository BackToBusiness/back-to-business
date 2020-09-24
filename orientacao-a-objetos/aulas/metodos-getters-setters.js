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
        return this._nome = nome;
    }

    get raca() {
        return this._raca;
    }

    get idade() {
        return this._idade;
    }
    set idade(idade) {
        return this._idade = idade;
    }

    latindo() {
        console.log(`O ${this.nome} está latindo...`);
    }
}