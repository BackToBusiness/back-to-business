//É quando os atributos e métodos pertencem à classe e não à instância. Os valores atribuidos serão associandos à classe e NÃO às instâncias que eu posso criar. Por isso eu não consigo usar o operador New. Pois em membros ESTÁTICOS só pode criar uma única instância da classe. O membro está no nível da classe. Ex: Class Math
//Estáticos podem ser classes utilitárias

class Banco {
    //nubank: number = 260
    static nubank: number = 260

    private _valorTaxa: number
    private _saldo: number

    constructor(valorTaxa: number, saldo: number) {
        this._valorTaxa = valorTaxa
        this._saldo = saldo
    }

    // transferencia() {
    //     console.log(`Realizando a transferência para o banco ${this.nubank}`);
    // }

    static transferencia() {
        console.log(`Realizando a transferência para o banco ${this.nubank}`);
    }

    public static calculaTaxa(valorTaxa: number, saldo: number): number {
        return valorTaxa * saldo
    }
}

// const banco = new Banco()
// banco.nubank = 342
// banco.transferencia()
Banco.transferencia()