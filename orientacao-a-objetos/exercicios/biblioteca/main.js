import {Livro} from "./livro.js"
import {Revista} from "./revista.js"
import {Artigo} from "./artigo.js"

class Main {
    constructor(type) {
        switch (type) {
            case "L":
                this.strategy = new Livro()
                break
            case "R":
                this.strategy = new Revista()
                break
            case "A":
                this.strategy = new Artigo()
                break
            default:
                console.log("Tipo não encontrado")
        }
    }

    MainInterface(titulo) {
        this.strategy.encontrarPeloTitulo(titulo)
    }
}

let buscaLivroPeloTitulo = (titulo) => {
    try {
        let livro = new Main("L")
        livro.MainInterface(titulo)
    } catch (error) {
        console.log(error)
    }
}

buscaLivroPeloTitulo("O Tempo")