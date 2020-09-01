
//Exemplo Alura
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

//O problema é que quando ele instanciou um DiretorTI e 
//chamou o método GetBonificacao ele recebou o valor de 
//200 e não de 100 como ele esperava. Por que isso aconteceu?
//Sim, se ele sobrescrever esse método a classe 
//funcionará da maneira que ele espera. 
//Porém esse código estará sendo sobrescrito em todas as 
//camadas da hierarquia de classes. Será que é uma boa opção?

/*
Isso mesmo! Com a herança podemos herdar classes que herdam de outras classes. 
E conforme essa cadeia cresce a complexidade do código tbm cresce. 
Por isso é considerada uma má prática criarmos árvores de herança muito profundas.
*/