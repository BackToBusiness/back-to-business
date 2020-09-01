class Conta {
    constructor(cliente, conta, saldo) {
        this.cliente = cliente;
        this.conta = conta;
        this.saldo = saldo;
    }

    get saldo() {
        return this._saldo
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }
}

class ContaCorrente extends Conta {
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

class ContaPoupanca extends Conta {
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

let contaCorrente = new ContaCorrente();
contaCorrente.saldo = 200;
console.log(contaCorrente.sacar(100));

let contaPoupanca = new ContaPoupanca();
contaPoupanca.saldo = 20;
try {
    console.log(contaPoupanca.sacar(100));
} catch (error) {
    console.log("Saldo Insuficiente");
}