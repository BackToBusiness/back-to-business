export class Acervo {
    constructor(titulo, autor) {
        this._titulo = titulo;
        this._autor = autor;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(titulo) {
        this._titulo = titulo;
    }

    get autor() {
        return this._autor;
    }

    set autor(autor) {
        this._autor = autor;
    }
}