class Conta {
    constructor(cliente: string, numConta: string, agencia: string) { }

    //acessível via herança
    protected verificarCpfCliente(cliente: string): void { }

    //acessível apenas dentro da classe
    private verificarDadosAgencia() { }

    //acessível sempre
    public verificarDadosConta() {
        this.verificarDadosAgencia()
    }
}