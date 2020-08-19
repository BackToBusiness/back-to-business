function fibonacci(n) {
    if (n === 1) return 1
    if (n === 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(8))

/***************** SEQUÊNCIA DE FIBONACCI ******************/
//            0   1   2   3   4   5   6   7     8    9   10
//fibonacci = 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55
//http://www.educ.fc.ul.pt/icm/icm99/icm41/os100.htm
//https://pt.stackoverflow.com/questions/209187/determinar-o-n-%C3%A9simo-termo-de-fibonacci-com-recursividade