export class Conta {
    constructor(cliente, conta, saldo) {
        this.cliente = cliente;
        this.conta = conta;
        this.saldo = saldo;
        if (this.constructor == Conta) {
            throw new Error("Você não pode instanciar a classe conta")
        }
    }

    get saldo() {
        return this._saldo
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    sacar() {}
}