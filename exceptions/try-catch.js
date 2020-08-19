//tratamento de erros com try/catch
try {
    console.log(prices);
} catch (error) {
    console.log("Deu ruim: " + error);
    console.log("Deu ruim: " + error.name);
    console.log("Deu ruim: " + error.message);
}

//lançar erros -> divisão por zero o código nao dá erro de compilação
function mediaDoTotalCalculado(total, qtd) {
    if (qtd === 0) {
        throw "Qtd não pode ser zero"
    } else {
        return total / qtd;
    }
}

try {
    let media = mediaDoTotalCalculado(20, 0);
    console.log("A média dos valores é" + media)
} catch (error) {
    console.log("Não é possível realizar divisão por zero: " + error)
}

//******************************************** */

function sacaValor(valor, saldo) {
    if (saldo < valor) {
        console.log(`Limite indisponível para saque. Seu saldo é de: ${saldo}`)
        return false;
    } else {
        saldo -= valor;
        console.log(`Seu saldo é de: ${saldo}`)
        return true;
    }
}

function sacaValorExcecao(valor, saldo) {
    try {
        if (saldo < valor) {
            console.log(`Limite indisponível para saque. Seu saldo é de: ${saldo}`)
        }
    } catch (error) {
        saldo -= valor;
        console.log(`Seu saldo é de: ${saldo}`)
        return true;
    }
}


sacaValor(100, 20);