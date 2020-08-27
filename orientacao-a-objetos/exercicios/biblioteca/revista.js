import {Acervo} from "./acervo.js"

export class Revista extends Acervo{
    constructor(editora) {
        super();
        this._editora = editora;
    }

    get editora(){
        return this._editora;
    }

    set editora(editora){
        this._editora = editora;
    }
}