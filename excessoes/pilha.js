function funcao1() {
    console.log("Iniciando a função 1");
    funcao2();
    console.log("Finalizando a função 1");
}

function funcao2() {
    console.log("Iniciando a função 2");
    try {
        mediaDoTotalCalculado(20, 0);
    } catch (error) {
        console.log(`${error}`)
    }
    funcao3();
    console.log("Finalizando a função 2");
}

function funcao3() {
    console.log("Iniciando a função 3");
    console.log(calculaFatorial(5));
    console.log("Finalizando a função 3");
}

function calculaFatorial(fatorial) {
    if (fatorial === 0 || fatorial === 1) return 1
    return fatorial * calculaFatorial(fatorial - 1);
}

//lançar erros -> divisão por zero o código nao dá erro de compilação
function mediaDoTotalCalculado(total, qtd) {
    if (qtd === 0) {
        //throw "Qtd não pode ser zero"
        throw new Error("Qtd não pode ser zero")
    } else {
        return total / qtd;
    }
}

funcao1()