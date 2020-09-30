let preco: number
preco = 3.0

let valor: any //deixa flexível

//arrays
//let precos = [10, 20, 2.10]
let precos: any[] = [10, 20, 2.10]
console.log(precos)
console.log(typeof precos)
precos = ["Maria"]
console.log('precos', precos)

//tuplas
let tuplaExemplo = ["Aveia", 2.99]
console.log('tupla', tuplaExemplo)
tuplaExemplo = ["Biscoito", "Bolacha"]
console.log('tupla', tuplaExemplo)

let materiais: [string, number] = ["Biscoito", 2.99]
console.log('materiais', materiais)
//materiais =  ["Biscoito", "teste"]
materiais =  ["Bolacha", 1.99]
console.log('materiais', materiais[0])

//enums
enum Status{
    Livre = 0,
    Alugado = 1
}

console.log(Status.Alugado)









