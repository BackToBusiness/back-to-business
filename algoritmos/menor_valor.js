const arr = [3, 5, 1, 9, 44, 6, 2, 89, -9]
let menor = 0

for (let atual = 0; atual < arr.length; atual++) {
    if (arr[atual] <= arr[menor]) {
        menor = arr[atual]
    }
}
console.log(menor)

let menorOrdenado = arr.sort(function (a, b) {
    return a - b;
});

console.log(menorOrdenado[0])

const salariosDosFuncionarios = [{
        nome: "Marcos",
        salario: 100
    },
    {
        nome: "Cana",
        salario: 2000
    },
    {
        nome: "Ana",
        salario: 30
    },
    {
        nome: "Célio",
        salario: 900
    }
]

let menor1 = salariosDosFuncionarios[0].salario;

salariosDosFuncionarios.forEach(element => {
    if (element.salario < menor1) {
        menor1 = element
    }
});

console.log(menor1)

var menorSalario = 0
for (let atual = 0; atual < salariosDosFuncionarios.length; atual++) {
    if (salariosDosFuncionarios[atual].salario < salariosDosFuncionarios[menorSalario].salario) {
       menorSalario = atual
    }
}

console.log(salariosDosFuncionarios[menorSalario])