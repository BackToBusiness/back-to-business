//ES5
//Para eu passar os parametros recebidos na função para as propriedades 
//do meu objeto pessoa eu utilizo o this.attr
function contaPoupanca(numero, cliente) {
    this.numero;
    this.cliente;
}

//ES6
class ContaCorrente {
    constructor(numero, cliente) {
        this.numero;
        this.cliente;
    }
}

let cPoupanca = new contaPoupanca();
cPoupanca.cliente = "Marcos";
console.log(cPoupanca)

let contaCorrente = new ContaCorrente();
contaCorrente.cliente = "Marcos"
console.log(contaCorrente);

// Criando uma função construtora

function Robo(n, s, material = 'Metal') {
    // atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // atributo público pode ser acessado fora da função construtora
    this.material = material;

    // método privado só conseguimos fazer uso dentro da função construtora
    let emite_relatorio = function () {
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Material: ${material}`);
    }

    // método público conseguimos acessar fora da função construtora
    this.faz_aniversario = function () {
        idade += 1;
        emite_relatorio();
    }

    this.getIdade = function () {
        return idade;
    }

    // Métodos só são permitidos dentro de classes
    // euSouUmMetodoPublico(){
    //     console.log("Eu Sou Um Metodo Publico")
    // }
}

// Instanciando um objeto
const robo = new Robo("C3PO", "Masculine programming");

console.log(robo);

console.log(robo.peso); // privado
console.log(robo.material); // público

robo.faz_aniversario(); // público
robo.faz_aniversario(); // público

// Instanciar um novo objeto
const robo2 = new Robo("Robocop", "Masculino");

robo2.faz_aniversario();
console.log(robo2.getIdade());

console.log(typeof (Robo)); // Function
console.log(typeof (robo2)); // object