class ContaCorrente extends Conta {
    constructor() {
        super("Marcos", "0001", "123456-7");
    }

    public saldo() {
        this.verificarCpfCliente("Marcos")
    }

    public sacar() {
        this.verificarDadosConta()
    }
}