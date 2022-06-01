function calcula_imc(peso, altura) {
    return peso / (altura * altura);
}

function imprimaOs10PrimeirosNumerosPares() {
    //for 
    //primeiro: ponto de partida
    //segundo: condição de parada
    //terceiro: ponto de incremento
    //0 1 2 3 4 5 6 7 8 9
    //i++ === i = i + 1
    for (var i = 0; i < 10; i++) { //loop que vai de 0 a 9
        if (i % 2 === 0) { //se o resto da divisão de i por 2 for 0
            console.log(i);
        }
    }

    var i = 0;
    while (i <= 12) {
        if (i % 2 === 0) { //se o resto da divisão de i por 2 for 0
            console.log(i);
        }
        i++ //condição de parada
    }

    for (let index = 1; index < 21; index += 2) {
        if (index % 7 === 0) { //resto da divisão de index por 7
            console.log(index);
            break; //para o loop
        }
        console.log(index);
    }

    //Loop infinito
    for (var current = 20;; current++) {
        if (current % 7 == 0)
            break;
    }
    console.log(current);
    // 21

    var tipoDeTransacao = "boleto";
    switch (tipoDeTransacao) {
        case "credito":
            console.log("Pagamento realizado com cartão de crédito");
            break;
        case "debito":
            console.log("Pagamento realizado com cartão de débito");
            break;
        case "boleto":
            console.log("Pagamento realizado com boleto");
            break;
        default:
            console.log("Pagamento não realizado");
            break;
    }

    var tipoDeTransacao = "credito";
    if(tipoDeTransacao === "credito") {
        console.log("Pagamento realizado com cartão de crédito");
    }
    else if(tipoDeTransacao === "debito") {
        console.log("Pagamento realizado com cartão de débito");
    }
    else if(tipoDeTransacao === "boleto") {
        console.log("Pagamento realizado com boleto");
    }





}