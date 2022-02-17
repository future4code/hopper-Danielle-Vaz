//Exercícios de interpretação de código

//1
//false, false, true e boolean

//2
//Ele precisa converter o string em número , onde houver variável é necessário converter

//3

//let primeiroNumero = Number(prompt("Digite um numero!"))
//let segundoNumero = Number(prompt("Digite outro numero!"))
//const soma = primeiroNumero + segundoNumero
//console.log(soma)

//Exercícios de escrita de código

//1
const idadeUsuario = prompt ("qual é sua idade")
console.log(idadeUsuario)
const idadeAmigo = prompt ("Qual idade do seu melhor amigo")
console.log(idadeAmigo)
console.log( "Sua idade é maior do que a do seu melhor amigo?" , idadeUsuario > idadeAmigo)
Number(idadeUsuario) 
Number(idadeAmigo)
console.log(idadeUsuario-idadeAmigo)

//2
let numeroPar = prompt ("Insira um número par")
Number(numeroPar)
const restoDaDivisao = numeroPar % 2
console.log(restoDaDivisao)//0
//todos os restos da divisão será 0 quando o dividendo forem pares
//todos os restos serão 1 qunado os dividendos forem impares

//3
const idadeExercicio = prompt ("Idade em Anos")
console.log(idadeExercicio)

//idade em meses
const idadeEmMeses = 20
const meses = 12
const resultado = idade * meses
console.log(resultado)

//idade em dias
const dias = 365
const resultadoDias = idadeEmMeses / dias
console.log(resultadoDias)

//idade em horas
const horas = 8760
const resultadoHoras = idadeEmMeses * horas
console.log(resultadoHoras)

//4
const respostaUm = prompt ("Primiro número")
Number(respostaUm)
const respostaDois= prompt ("Segundo número")
Number(respostaDois)

console.log("O primeiro numero é maior que segundo?" , respostaUm > respostaDois)
console.log("O primeiro numero é igual ao segundo?" , respostaUm = = = respostaDois)
console.log("O primeiro numero é divisível pelo segundo?", respostaUm / respostaDois)
console.log("O segundo numero é divisível pelo primeiro?", respostaDois / respostaUm)
