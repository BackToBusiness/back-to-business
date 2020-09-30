function getNome():string{
    return "Marcos"
}

function printMessage(): void{
    console.log("Imprimindo a mensagem")
}

function soma(num1: number, num2: number): number{
    return num1 + num2
}

getNome()
printMessage()
soma(1,2)

//tipo função
let sum: (num1: number, num2: number) => number
sum = soma
console.log('sum', sum(2,1))