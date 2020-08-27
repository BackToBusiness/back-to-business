import {Acervo} from "./acervo.js"

export class Artigo extends Acervo{
    constructor(publicador) {
        super()
        this._publicador = publicador;
    }

    get publicador(){
        return this._publicador;
    }

    set publicador(publicador){
        this._publicador = publicador;
    }

}