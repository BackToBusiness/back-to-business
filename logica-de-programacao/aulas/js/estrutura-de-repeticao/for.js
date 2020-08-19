//para -> (declaração do indice; condicional; incremento)
for (let index = 0; index < 10; index++) { 
    console.log(index);
}

//imprima todos os números pares de 0 a 20
for (let index = 0; index < 21; index += 2) {
    console.log(index);
}

//Sair de um loop - Imprima todos os números ímpares
//Deve sair do laço se o índice for divisível por 7
for (let index = 1; index < 21; index += 2) {
    if(index % 7 === 0){
        console.log(index);
        break; 
    }
    console.log(index);
}

//Loop infinito
for (var current = 20; ; current++) {
    if (current % 7 == 0)
        break;
}
console.log(current);
// 21
