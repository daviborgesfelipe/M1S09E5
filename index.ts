class Animal{
    nome:string;
    raca:string;
    corPelo:string;
    peso:number;

    constructor(nome:string, raca:string, corPelo:string, peso:number){
        this.nome = nome;
        this.raca = raca;
        this.corPelo = corPelo;
        this.peso = peso;
    }
}
let instancia = new Animal("Juli", "Dalmata", "Manchas Marrons e Brancas", 24);
console.log(instancia)