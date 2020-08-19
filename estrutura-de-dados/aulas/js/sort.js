var array = ["Netflix", "Google", "Facebook", "Amazon"];
array.sort();
console.log(array)

var prices = [12.3, 56.4, 1.2, 0.3]
prices.sort();
console.log(prices)

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];
var resultado = pares.concat(impares);

console.log("Valores concatenados");
console.log(resultado);

console.log("O array é ordenado de acordo com a potuação de código Unicode de cada um dos caracteres, de acordo com a conversão de cada elemento para string.");
console.log(resultado.sort());

console.log("Os valores são odernados")
console.log(resultado.sort(function (a, b) {
    return a - b;
}));

/** //Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * Se funcaoDeComparacao(a, b) for menor que 0, ordena a para um índice anterior a b, i.e. a vem primeiro.
Se funcaoDeComparacao(a, b) retornar 0, deixa a e b inalterados em relação um ao outro, mas ordenado em relação a todos os outros elementos. Nota: O padrão ECMAscript não garante este comportamento, e, portanto, nem todos os navegadores (e.g. Versões do Mozilla anteriores a 2003) respeitarão isto.
Se funcaoDeComparacao(a, b) é maior que 0, ordena b para um índice anterior que a.
funcaoDeComparacao(a, b) sempre deve retornar o mesmo valor dado um par específico de elementos a e b como seus dois parametros. Se resultados inconsistentes são retornados, então a ordenação é indefinida.
*/

function comparar(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a deve ser igual a b
    return 0;
}