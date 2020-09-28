import { Conta } from './conta.js';

export class ContaCorrente extends Conta {
    constructor(cliente, conta, saldo) {
        super(cliente, conta, saldo);
        this._imposto = 0.1;
    }

    get imposto() {
        return this._imposto;
    }

    sacar(valor) {
        let valorCalculado = this.calculaImpostoCC(valor);
        if (this.saldo < valorCalculado) throw new Error()
        return this.saldo - valorCalculado;
    }

    calculaImpostoCC(valor) {
        return valor + (valor * this.imposto);
    }
}
