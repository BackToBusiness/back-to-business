//Exercício 1 - Fazer usando map e filter & e o mesmo exercício usando laço de repetição for
/**
 1.1 Listar todos os docentes da área de biológicas e que irão se aposentar nos próximos 15 anos
 1.2 Imprimir o ano de aposentadoria de todos os docentes
 1.3 Somar os salários dos docentes (Desafio)
 1.4 Dos docentes que irão se aposentar nos próximos 15 anos, calcule o salário total (salário + bonus)
 */

var dadosDosDocentes = [{
        disciplina: "Matemática",
        docente: "Ana",
        area: "exatas",
        anoAposentadoria: 2028,
        salario: 1000,
        "bonus(%)": 10
    },
    {
        disciplina: "Português",
        docente: "Marcelo",
        area: "humanas",
        anoAposentadoria: 2060,
        salario: 800,
        "bonus(%)": 5
    },
    {
        disciplina: "Física",
        docente: "João",
        area: "exatas",
        anoAposentadoria: 2035,
        salario: 1300,
        "bonus(%)": 3
    },
    {
        disciplina: "Biologia",
        docente: "Maria",
        area: "biológicas",
        anoAposentadoria: 2040,
        salario: 900,
        "bonus(%)": 20
    },
    {
        disciplina: "Fisiologia do Corpo",
        docente: "Neusa",
        area: "biológicas",
        anoAposentadoria: 2031,
        salario: 2200,
        "bonus(%)": 12.4
    },
]

const listarDocentesQueAposentamEm15Anos = dadosDosDocentes.filter((valor) => {
    return new Date().getFullYear() + 15 >= valor.anoAposentadoria
});

const listarDocentesBiologicaQueAposentamEm15Anos = dadosDosDocentes.filter((valor) => {
    return valor.area === 'biológicas' && new Date().getFullYear() + 15 >= valor.anoAposentadoria
})

console.log("Os docentes da área de biológicas e que irão se aposentar nos próximos 15 anos: ")
console.log(listarDocentesBiologicaQueAposentamEm15Anos)

dadosDosDocentes.forEach(element => {
    console.log("O ano de aposentadoria da " + element.docente + " é: " + element.anoAposentadoria)
});
//reduce(previousValue, currentValue)
const pegarSomaDosSalarios = dadosDosDocentes.reduce((sum, element) => {
    return sum + element.salario;
}, 0);

console.log("A soma dos salários dos docentes é: " + pegarSomaDosSalarios)

const listarSalarioTotalDocentesQueAposentamEm15Anos =
    listarDocentesQueAposentamEm15Anos.map((element) => {
        return element.docente + " - " + Number(element.salario * (1 + (element["bonus(%)"] / 100)))
    })
console.log("Dos docentes que irão se aposentar nos próximos 15 anos, o salário total é:")
console.log(listarSalarioTotalDocentesQueAposentamEm15Anos);