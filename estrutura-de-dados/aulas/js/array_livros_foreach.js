var precos = [1000, 1500, 2000];
var livros = ["A Meta", "Scrum a Arte de Fazer o dobro pela metade do tempo", "O Tempo"];

var autores = new Array();
var autores = new Array(3);
var editoras = new Array("a", "b");
var isbns = [3]


var livro = [{
        "nome": "A meta",
        "preco": "10,00"
    },
    {
        "nome": "Scrum",
        "preco": "20,00"
    },
    {
        "nome": "O Tempo",
        "preco": "13,90"
    }
]

livros.forEach(function (element, index) {
    console.log(`${index}` + " - " + `${element}`);
});

livro.forEach(element => {
    console.log(element.nome + " - R$ " + element.preco)
});

//console.log(livro[0].nome + " - " + livro[0].preco)






// for (let index = 0; index < precos.length; index++) {
//     console.log("O livro: " + livros[index] + " custa " + precos[index] + " reais");
// }

// function calculaMedia(precos) {
//     let valorTotal = 0;
//     for (let index = 0; index < precos.length; index++) {
//         valorTotal += precos[index];
//     }
//     return valorTotal / precos.length;
// }

//console.log(calculaMedia(precos));