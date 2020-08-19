var numDeMensagens = 5;
var msg = "mensagem número ";
var count = 1;

function mensagemSemRecursao() {
    for (let index = 1; index <= numDeMensagens; index++) {
        console.log(msg + index)
    }
}

function mensagemComRecursao() {
    if (numDeMensagens >= count) { //condição de parada da função recursiva
        console.log(msg + count++)
        mensagemComRecursao();
    }
}
mensagemSemRecursao()
console.log("**************")
mensagemComRecursao()