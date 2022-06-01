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