class Atleta
{
    constructor(nome, idade, peso, altura, notas)
    {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria(){
        if(this.idade >=9 && this.idade <=11){return "Infantil"}
        if(this.idade >=12 && this.idade <=13){return "Juvenil"}
        if(this.idade >=14 && this.idade <=15){return "Intermediário"}
        if(this.idade >=16 && this.idade <=30){return "Adulto"}
        return "Sem categoria"
    }

    calculaIMC()
    {
        return this.peso/(this.altura**2)
    }

    calculaMediaValida()
    {
        this.notas.sort((a,b) => a - b)
        return (this.notas[1] + this.notas[2] + this.notas[3])/3
    }

    obtemNomeAtleta(){return this.nome}
    obtemIdadeAtleta(){return this.idade}
    obtemPesoAtleta(){return this.peso}
    obtemNotasAtleta(){return this.notas}

    obtemCategoria(){returnthis.calculaCategoria()}

    obtemIMC(){return this.calculaIMC()}

    obtemMediaValida(){return this.calculaMediaValida()}
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,[10, 9.34, 8.42, 10, 7.88]);