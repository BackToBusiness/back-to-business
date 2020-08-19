var tamanho = 8;
for (let i = 0; i < tamanho; i++) {
    if (i % 2 === 0) {
        var tabuleiro = ""
    } else {
        tabuleiro =  " "
    }
    for (let j = 0; j < tamanho; j++) {
        if (j % 2 === 0) {
            tabuleiro += "#"
        } else {
            tabuleiro += " "
        }
    }
    console.log(tabuleiro)
}

/*
tabuleiro = # #   
   
*/

// var size = 4;
// for (var i = 0; i < size; i++) {
//     var text = i % 2 === 0 ? '' : '  ',
//         j = 0;
//     do {
//         text += '#  ';
//     } while (j++ < (size / 2));
//     console.log(text)
// }

// var tamanho = 8;
// for (var i = 1; i <= tamanho; i++) {
//     var linha = (i % 2) ? '' : ' ';
//     for (var j = 1; j < tamanho; j++) {
//         linha += (j % 2) ? '#' : ' ';
//     }
//     console.log(linha);
// }