// var numeroDigitado = 5
// var fatorial = 1;
// if (isNaN(numeroDigitado) || numeroDigitado < 1) {
//     console.log("Número digitado deve ser inteiro e positivo!");
// } else {
//     for (let index = numeroDigitado; index >= 1; index--) {
//        // fatorial = fatorial * index;
//        fatorial *= index;
//     }
//     console.log("O fatorial é: " + fatorial);
// }
//1.2.3.4.5=6

console.log(fatorial(n))
//1.2.3.4.5 = 120

function fatorial(n) {
    var fatorial = 1;
    for (let i = n; i > 1; i--) {
      fatorial = fatorial * i
    }
    return fatorial
  }
  fatorial(5);