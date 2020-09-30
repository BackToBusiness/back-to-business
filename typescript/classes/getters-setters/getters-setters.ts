class Carro { 

    private _modelo = "Focus"
    private _marca = "Ford"
    private _velocidadeMax = 0

    public get modelo(): string {
        return this._modelo;
    }

    public set modelo(modelo: string) {
        this._modelo = modelo;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(marca: string) {
        this._marca = marca;
    }

    public get velocidadeMax(): number {
        return this._velocidadeMax;
    }

    public set velocidadeMax(valor: number) {
        valor >= 0 && valor < 180 ? this._velocidadeMax = valor : console.log('Velocidade não permitida')
    }
}
const velox = new Carro
velox.velocidadeMax = 200
