
class Funcionario {
    getBonificacao() {
        return 100;
    }
}
class Diretor extends Funcionario {
    getBonificacao() {
        return 200;
    }
}
class DiretorTI extends Diretor {

}
