# Estrutura de Dados

Em programação de computadores, um arranjo (em inglês array) é uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave. Essa estrutura de dados também é conhecida como variável indexada, vetor (para arranjos unidimensionais) e matriz (para arranjos bidimensionais). Os arranjos mantêm uma série de elementos de dados, geralmente do mesmo tamanho e tipo de dados. 

Elementos individuais são acessados por sua posição no arranjo. A posição é dada por um índice, também chamado de subscrição. O índice geralmente utiliza uma sequência de números inteiros, mas o índice pode ter qualquer valor ordinal. Os arranjos podem ser multidimensionais, significando que eles são indexados por um número fixo de números inteiros, por exemplo, por um sequência (ou sucessão) finita de quatro números inteiros. Geralmente, arranjos unidimensionais e bidimensionais são os mais comuns.

**Fonte:** https://pt.wikipedia.org/wiki/Arranjo_(computa%C3%A7%C3%A3o)

**IMPORTANTE: ARRAYS EM JAVASCRIPT SÃO OBJETOS. NÃO EXISTE UM TIPO DE DADOS ARRAY**

## Conjuntos de dados

O JavaScript fornece um tipo de dados especificamente para armazenar sequências de valores. Ele é chamado de *array*, e é escrito como uma lista de valores entre colchetes, separados por vírgulas. Faça o teste! Abra o console do navegador e digite o seguinte código.

```js
var temperaturas = "29.5 22 25.9 19"
```
Em seguida digite: `typeof(temperaturas)`. Veja que a variável `temperaturas` é do tipo `string`. Agora altere o código para:

```js
var temperaturas = ["29.5", "22", "25.9", "19"]
```
Em seguida digite: `typeof(temperaturas)`. Veja que a variável `temperaturas` agora é do tipo `object`. 


O JavaScript é uma linguagem dinamicamente tipada. Isso significa que você não precisa especificar o tipo de dado de uma variável quando declará-la, e tipos de dados são convertidos automaticamente conforme a necessidade durante a execução do script. Sendo assim ao declarar uma variável `var numerosPares = [2,4,6,8]` dinamicamente o Javascript interpreta que a variável `numerosPares` é um tipo de `object` na estrutura de um `array`


**Outras formas de criar e inicializar arrays**
```js
let diasDaSemana = new Array();
let diasDaSemana = new Array(7);
let diasDaSemana = new Array("Segunda-Feira","Terça-Feira"...);
```

Ainda, você pode declarar um *array* vazio:
```js
var temperaturas = []
```
Em seguida atribuir os valores aos seus índices:
```js
// Dessa forma não seria muito viável
// var avgTempJan = 34.6;
// var avgTempFev = 23.4;
// var avgTempNMar = 12.4;
// var avgTempApr = 23.2;
// var avgTempMay = 23.1;
//inicializamos um array vazio

var temperaturas = [];
temperaturas[0] = 34.6;
temperaturas[1] = 23.4;
temperaturas[2] = 12.4;
temperaturas[3] = 23.2;
temperaturas[4] = 23.1;

console.log("O indice " + temperaturas[4]); //23.1
```

Acessando todos os índices do Array:

```js
for(let i = 0; i < salaries.length; i++){
	console.log(salaries[i]);
}
```
Exemplo de array dentro de uma função:

```js
var precos = [1000, 1500, 2000];
var livros = ["A Meta", "Scrum a Arte de Fazer o dobro pela metade do tempo", "O Tempo"];

for (let index = 0; index < precos.length; index++) {
    console.log("O livro: " + livros[index] + " custa " + precos[index] + " reais");
}

function calculaMedia(precos) {
    let valorTotal = 0;
    for (let index = 0; index < precos.length; index++) {
        valorTotal += precos[index];
    }
    return valorTotal / precos.length;
}

console.log(calculaMedia(precos));
```

Agora, vamos conhecer *arrays* de objetos e iterar sobre os valores usando uma nova estrutura de repetição `forEach`

```js
var livro = [{
        "nome": "A meta",
        "preco": "1000"
    },
    {
        "nome": "Scrum",
        "preco": "2000"
    }
]

livro.forEach(element => {
    console.log(element.nome + " - " + element.preco);
});
```

Arrays possuem tamanhos infinitos (Vai depender do tamanho da memória disponível). Podemos colocar qualquer tipo de dado. Cada elemento adicionado no array você está alocando um espaço em memória. Ainda, podemos misturar os tipos de dados. 

```js
var array = [1, true, 'Marcos'];
```

Uma outra forma de criar um *array* é usar um formato de estrutura de objetos:

```js
var clientes = [
    {
        nome: "Marcos",
        cpf: "111.222.333-44",
        dataDeNascimento: "01/01/1900",
        ativo: true
    },
    {
        nome: "Paulo",
        cpf: "111.222.333-44",
        dataDeNascimento: "01/01/1900",
        ativo: false
    }
]
```

### **Mutabilidade - Alterando o valor do índice**

```js
var array = [1, true, 'Marcos'];
array[1] = false
array[3] = 'Paulo' //Adiciona

console.log(array) // [1, false, "Marcos", "Paulo"]
```

O operador == de JavaScript, quando se comparamos objetos, retornará verdadeiro somente se ambos os valores que lhe são atribuídas são o mesmo valor preciso. Comparando diferentes objetos com conteúdos idênticos retornará false.

```js
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```

## **Manipulando Arrays**

**Push(element) → Adiciona um elemento ao final o array**

```js
var array = ["Marcos", "Paulo", "Salgueiro"]
array.push("de") 
console.log(array);
array.push("Moraes") 
```

**Unshift(element) → Adiciona um elemento no início do array**

```js
var array = ["Google", "Facebook", "Amazon", "Microsoft"];
array.unshift("Netflix")
console.log(array);
```

**Pop( ) → Remove no final do array**

```js
var array = ["Google", "Facebook", "Amazon", "Microsoft"];
array.pop()
console.log(array);
```

**shift( )→ Remove no início do array**

```js
var array = ["Google", "Facebook", "Amazon", "Microsoft"];
array.pop()
console.log(array);
```

**Slice( ) → a partir do índice 1 pegue até o índice n sem incluí-lo**
Outro método fundamental é o `slice`, que recebe um índice de início e outro de parada, retornando um array que contém apenas os elementos contidos no intervalo desses índices. O índice de início é inclusivo e o de parada é exclusivo.

```js
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

var array = ["Google", "Facebook", "Amazon"]
array.slice(1,2)
//["Facebook"]
array.slice(1)
//["Facebook", "Amazon"]
```
Quando o índice de parada não é informado, o `slice` irá pegar todos os elementos após o índice de início.

**Concat( ) → O método concat pode ser usado para juntar arrays, parecido com o que o operador + faz com as strings.**
```js
var array = ["Google", "Facebook", "Amazon"]
var array2 = ["Spotify", "Twitter", "Instagram"]
var contatenation = array.concat(array2)
console.log(contatenation)
//["Netflix", "Google", "Facebook", "Amazon", "Spotify", "Twitter", "Instagram"]
```

**indexOf( ) → retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.**

sintexe: `array.indexOf(elementoDePesquisa, [pontoInicial = 0])`

```js
var array = ["Netflix", "Google", "Facebook", "Amazon"]
array.indexOf("Twitter")
//-1
array.indexOf("Netflix")
//0 
array.indexOf("Facebook")
//2
array.unshift("Amazon")
//["Amazon", "Netflix", "Google", "Facebook", "Amazon"]
array.indexOf("Amazon",1)
//4
```

## **Strings e suas propriedades**

Podemos ler propriedades como `length` e `toUpperCase` de strings. Porém, caso tente adicionar uma nova propriedade, ela não será adicionada.

```js
var myString = "Fido";
myString.myProperty = "value";
console.log(myString.myProperty);
// → undefined
```

Valores do tipo `string`, `number` e `boolean` não são objetos e por isso, mesmo com o fato da linguagem não reclamar, quando tentamos adicionar novas propriedades, elas não são armazenadas. Os valores são imutáveis e não podem ser alterados

Mesmo assim, esses tipos possuem propriedades *nativas*. Toda string possui uma série de métodos. Provavelmente, alguns dos mais úteis são `slice` e `indexOf`, os quais são parecidos com os métodos de array que possuem o mesmo nome.

```js
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
```

Uma diferença é que o indexOf das strings pode receber uma string contendo mais de um caractere, enquanto o método correspondente no array procura apenas por um único elemento.

```js
console.log("one two three".indexOf("ee"));
// → 11
```

Find the first occurrence of the letter "e" in a string, starting the search at position 5:

```js 
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("e", 5);
```

O método `trim` remove todos os espaços vazios (espaços, linhas, tabs e caracteres similares) do começo e do fim de uma string.

```js
console.log("  okay \n ".trim());
// → okay
```

Já vimos a propriedade `length` das strings. Para acessar caracteres individuais de uma string, podemos usar o método `charAt` recebendo propriedades numéricas, da mesma forma que você faria com um array.

```jsx
var string = "abc";
console.log(string.length);
// → 3
console.log(string.charAt(0));
// → a
console.log(string[1]);
// → b
```

**Reverse( )** 

```jsx
var array = ["Nike", "Aribnb", "Netflix", "Google", "Facebook", "Amazon"];
array.sort();
array.reverse();
console.log(array)
```
**delete(index) → Apaga o valor do array**

```jsx
var array = ["Netflix", "Google", "Facebook", "Amazon"];
delete array[1];
console.log(array) //["Netflix", empty, "Facebook", "Amazon"]

//devolver o valor para o array
array[1] = "Google"
```
**splice(indice, qtd) → Deleta a partir do índice 1, apenas 2 elementos**

```jsx
var array = ["Netflix", "Google", "Facebook", "Amazon"]
array.splice(1,2)
//["Google", "Facebook"]
console.log(array)
//["Netflix", "Amazon"]
```

# Exercícios

### **Exercício 1 → Encontrar todas as ocorrências do Array com a string `"Amazon"`**

```js
var indices = [];
var array = ["Amazon", "Netflix", "Google", "Facebook", "Amazon"];
var elemento = "Amazon";
var idx = array.indexOf(elemento);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(elemento, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### Exercício 2 → Encontrar se um elemento existe ou não e atualizar o array

**Sort( ) → Ordenar os dados de um Array**

```jsx
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
```
