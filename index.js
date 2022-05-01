var Animal = /** @class */ (function () {
    function Animal(nome, raca, corPelo, peso) {
        this.nome = nome;
        this.raca = raca;
        this.corPelo = corPelo;
        this.peso = peso;
    }
    return Animal;
}());
var instancia = new Animal("Juli", "Dalmata", "Manchas Marrons e Brancas", 24);
console.log(instancia);
