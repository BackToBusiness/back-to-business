import { Empresa } from './Empresa'

class Employee {
    private _nomeCompleto: string
    _cargo: string
    _sal: number
    _empresa: Empresa

    constructor(nome: string, cargo: string, sal: number, empresa: Empresa) {
        this._nomeCompleto = nome
        this._cargo = cargo
        this._sal = sal
        this._empresa = empresa
    }

    get nomeCompleto(): string {
        return this._nomeCompleto
    }

    set nomeCompleto(nome: string) {
        this._nomeCompleto = nome
    }
}

const emp: Empresa = {
    nome: "Fábrica de Legumes",
    razaoSocial: "FBC"
}

const employee = new Employee("José", "Operador", 2000, emp)
employee.nomeCompleto = "Marcos"
console.log(employee);

class Product {
    constructor(public nome: string, public preco: number, public desconto: number = 0) { }

    public imprime(): string {
        return `O produto ${this.nome} custa ${this.preco} com o desconto de ${this.calculaDesconto()}`
    }

    calculaDesconto(): number {
        return this.preco * (1 - this.desconto)
    }
}

const prod1 = new Product("Biscoito", 1.99)
prod1.desconto = 0.2
console.log(prod1.imprime())

const prod2 = new Product("Bolacha", 0.99, 0.5)
console.log(prod2.imprime())

class Account {
    constructor(client: string, numConta: string, agencia: string) { }

    protected verificarCpfClient(client: string): void { }

    private verificarDadosAgencia() { }

    public verificarDadosConta() {
        this.verificarDadosAgencia()
    }
}

class ContaCorrente extends Account {
    constructor() {
        super("Marcos", "0001", "1111111")
    }

    public saldo() {
        this.verificarCpfClient("Marcos")
    }

    public sacar() {
        this.verificarDadosConta()
    }
}