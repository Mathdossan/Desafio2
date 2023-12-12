let nome = "Marreta"
let saldo = persona(50, 0)


function persona (vitoria, derrota) {
    let dif = vitoria - derrota
    return dif
}

    if (saldo<10) {console.log("O herói " + nome + " tem o saldo de " + saldo + " vitórias. E está no nível de " + "ferro")}
    else if (saldo<21) {console.log("O herói " + nome + " tem o saldo de " + saldo + " vitórias. E está no nível de " + "Bronze")}
    else if (saldo<51) {console.log("O herói " + nome + " tem o saldo de " + saldo + " vitórias. E está no nível de " + "Prata")}
    else if (saldo<81) {console.log("O herói " + nome + " tem o saldo de " + saldo + " vitórias. E está no nível de " + "Ouro")}
    else if (saldo<91) {console.log("O herói " + nome + " tem o saldo de " + saldo + " vitórias. E está no nível de " + "Diamante")}
    else if (saldo<101) {console.log("O herói " + nome + " tem o saldo de " + saldo + " vitórias. E está no nível de " + "Lendário")}
  else if (saldo>100) {console.log("O herói " + nome + " tem o saldo de " + saldo + " vitórias. E está no nível de " + "IMORTAL")}




/* ## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */
