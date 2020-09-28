import { Conta } from './conta.js';

export class ContaPoupanca extends Conta {
    constructor(cliente, conta, saldo) {
        super(cliente, conta, saldo);
        this._imposto = 0.01;
    }

    get imposto() {
        return this._imposto;
    }

    sacar(valor) {
        let valorCalculado = this.calculaImpostoCP(valor);
        if (this.saldo < valorCalculado) throw new Error()
        return this.saldo - valorCalculado;
    }

    calculaImpostoCP(valor) {
        return valor + (valor * this.imposto);
    }
}
