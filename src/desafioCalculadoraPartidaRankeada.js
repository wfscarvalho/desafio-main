let qtdPartidas=10
let qtdDerrotas=1
let MatchNumber=1

console.log("\n\nIniciando Partidas\n")

while (MatchNumber<(qtdPartidas+qtdDerrotas)) {
    console.log(`Partida ${MatchNumber} Realizada.`)
    MatchNumber++
}

console.log("\nPartidas Finalizadas.\n")
//let ResultadoPartida=MatchSimulation(qtdVitorias,qtdDerrotas,MatchNumber)

//console.log(ResultadoPartida)

let SaldoVD=CalculoVD(qtdPartidas,qtdDerrotas)
let Nivel=CalculoNivel(SaldoVD)

console.log(`O Herói realizou ${qtdPartidas} partidas, perdeu ${qtdDerrotas} e ficou com saldo de ${SaldoVD} vitorías. Isso o coloca no nível: ${Nivel}.\nParabéns\n`)

function CalculoVD(qtdVitorias,qtdDerrotas){
    let saldo=qtdVitorias-qtdDerrotas
    return saldo
}

function CalculoNivel(SaldoVD){
    if (SaldoVD<10){
        return ("Ferro")
    } else if((SaldoVD>=10)&&(SaldoVD<20)){
        return ("Bronze")
    } else if((SaldoVD>=20)&&(SaldoVD<30)){
        return ("Prata")
    } else if((SaldoVD>=30)&&(SaldoVD<40)){
        return ("Ouro")
    } else if((SaldoVD>=40)&&(SaldoVD<50)){
        return ("Diamante")
    } else if((SaldoVD>=50)&&(SaldoVD<60)){
        return ("Lendário")
    } else((SaldoVD>=60));{
        return ("Imortal")
    }
}

function MatchSimulation(qtdVitorias,qtdDerrotas,MatchNumber){
    while (MatchNumber<=(qtdVitorias+qtdDerrotas)) {
        console.log(`Partida ${MatchNumber} Realizada.`)
        MatchNumber++
    } return false 
}