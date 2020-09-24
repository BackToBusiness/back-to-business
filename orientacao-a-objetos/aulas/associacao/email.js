export class Email {
    constructor() {
        this._remetente = "marcos@teste.com.br"
    }

    get remetente() {
        return this._remetente
    }

    enviarEmail() {
        console.log("Email enviado com sucesso")
    }
}