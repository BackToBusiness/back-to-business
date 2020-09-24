import {
    Endereco
} from './endereco.js';

export class Cliente {
    constructor(nome, email, endereco) {
        this._nome = nome
        this._email = email
        this._endereco = endereco
    }
}

const cliente = new Cliente("Marcos", "marcos@teste.com", new Endereco("Rua 7", 10, "12222-000"))
console.log(cliente)
console.log(cliente.endereco)

