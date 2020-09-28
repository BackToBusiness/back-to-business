import { Conta } from './conta.js';
import { ContaCorrente } from './conta-corrente.js';
import { ContaPoupanca } from './conta-poupanca.js';

let conta = new Conta();
conta.sacar();

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