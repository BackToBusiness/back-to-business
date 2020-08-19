var message1 = "welcome";
var message2 = "back to business";

var age = 19;
var name = "Mary";

var salary = 1000;
var bonus = 0.1;

console.log(message1 + " " + message2);
console.log(name + " tem " + age + " anos");
console.log("O salário de " + name + " é " + salary);
console.log("O salário com bônus de " + name + " é " + calculateSalary());

function calculateSalary(){
    return (salary * bonus) + salary;
}
console.log("****** TEMPLATE STRING ***********")
//template string ${var}
//usa-se crase
console.log(`${message1} ${message2}`)
console.log(`${name} tem ${age} anos`)
console.log(`O salário de ${name} é ${(salary * bonus) + salary}`)
console.log(`O salário com bônus de ${name} é ${calculateSalary()}`)
