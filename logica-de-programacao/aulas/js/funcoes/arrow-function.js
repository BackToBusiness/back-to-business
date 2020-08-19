function soma(num1, num2) {
    return num1 + num2
}

let resultado = function soma(num1, num2) {
    return num1 + num2
}

let resultado_arrow = (num1, num2) => {
    return num1 + num2
}

console.log(soma(1, 2))
console.log(typeof (soma))

console.log(resultado(1, 2))
console.log(typeof (resultado))

console.log(resultado_arrow(1, 2))
console.log(typeof (resultado_arrow))

var numbers = [4, 9]

var square_arrow = numbers.map((value) => {
    return Math.sqrt(value)
})

console.log(square_arrow)
console.log(typeof (square_arrow))

var square = numbers.map(function (value) {
    return Math.sqrt(value)
})

console.log(square)
console.log(typeof (square))

//Arrow function com 1 parâmetro. Além disso o retorno é automático quando não se usa '{}' 
let aux = value => Math.sqrt(value)
console.log(aux(16))

//retornando uma string
function welcomeMessage(){
    return "Welcome To Back To Business"
}
console.log(welcomeMessage())

//retornando uma string com arrow function
const message = () => "Welcome To Back To Business"
console.log(message())