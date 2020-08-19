const names = ["Marcos", "Ana", "Maria"];

const names2 = [name1, name2, name3] = names;

console.log(name1);
console.log(name2);
console.log(name3);

console.log("************************")

const names3 = [n1, ,n3] = names;
console.log(n1);
console.log(n3);

console.log("************************")

const names4 = [nome1, nome3] = names;
console.log(nome1);
console.log(nome3);

//inicializar caso não exista o valor
const oldPrices = [1.2, 3.4, 6, 5.1]
const prices = [price1, ,price3, price4, price5 = 12.4] = oldPrices;
//const prices = [price1, ,price3, price4, price5] = oldPrices; //Viria undefined
console.log(price1);
console.log(price3);
console.log(price4);
console.log(price5); 

console.log("************************")

const pessoa = {
    name: "Mary",
    lastName : "Jane"
} 

console.log(pessoa.name + " " + pessoa.lastName)
console.log(`${pessoa.name} ${pessoa.lastName}`)

const {name, lastName} = pessoa;
console.log(`${name} ${lastName}`)
