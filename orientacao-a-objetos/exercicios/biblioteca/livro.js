import {
    Acervo
} from "./acervo.js"
import {
    bancoDeDados
} from './dados.js';

export class Livro extends Acervo {
    constructor(isbn, editora, paginas) {
        super()
        this._isbn = isbn;
        this._editora = editora;
        this._paginas = paginas;
    }

    get isbn() {
        return this._isbn;
    }

    set isbn(isbn) {
        this._isbn = isbn;
    }

    get editora() {
        return this._editora;
    }

    set editora(editora) {
        this._editora = editora;
    }

    get paginas() {
        return this._paginas;
    }

    set paginas(paginas) {
        this._paginas = paginas;
    }

    encontrarPeloTitulo(titulo) {
        let livrosEncontrados = [];
        bancoDeDados.livros.forEach(element => {
            if (titulo === element.titulo) {
                livrosEncontrados.push(element)
            }
        });
        if (livrosEncontrados.length === 0) {
            throw "Nenhum título foi encontrado"
        }
        console.log(livrosEncontrados)
    }
}