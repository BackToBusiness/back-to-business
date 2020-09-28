import {
    Email
} from "./email.js"

class Usuario {
    constructor(nome) {
        this._nome = nome
    }

    get email() {
        return this._email
    }

    confirmarInscricao() {
        new Email().enviarEmail();
    }
}
/**Exemplo de encapsulamento 
const email = new Email()
email.remetente = "opa"
console.log(email)
*/

console.log(new Usuario().confirmarInscricao())

//Usuario delega a responsabilidade de manipular um email para a classe Email