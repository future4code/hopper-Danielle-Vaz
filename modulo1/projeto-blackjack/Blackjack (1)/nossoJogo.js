/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const boasVindas = ("Boas vindas ao jogo de Blackjack")
console.log(boasVindas)

if(confirm("Quer iniciar uma nova rodada?")) {
	console.log("Iniciar uma nova rodada")
} else {
	console.log("O jogo acabou")
}
