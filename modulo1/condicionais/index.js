// Exercicios de Interpretação de código
//1
//a-  O código declara a variavel e depois a chama de forma sicrona.O teste que ele realiza é se o numero que o usuario quer testar divido por  é igual a 0.
//b-  Números pares, divisiveis por 2
//c - Números imapares que terá resto 

//2 
//a- Para comparar valores
//b- O preço da fruta  maça  é  R$  5
//c- Não haveria mensagem alguma, pois a retirada do Break impede 
//que o retorno raciocinio daquele bloco saconteça.

//3 
//a- Ela está colhendo a informação em string pelo prompt e transformando em número.
//b- 10 esse número passou no teste, -10 a informação foi de erro
//c- O sinal de - precisa ser inserido antes do núemero zero 
//const numero = Number(prompt("Digite o primeiro número."))
//if(numero < -0) {
// console.log("Esse número passou no teste")
//let mensagem = "Essa mensagem é secreta!!!"
//}
//console.log(mensagem)

//1 Exercícios de escrita de código
//a
let idadeDoUsuario=prompt("Digite sua idade")
//b
let numero = Number(idadeDoUsuario)
//c

if (numero >=18){
console.log("Voce pode dirigir")
}else (numero > 18)
console.log("Voce não pode dirigir")

//2
let turnoAluno=prompt("Qual turno voce estuda?")
if(turnoAluno === "Manhã"){
    console.log("Bom dia!")
}else if(turnoAluno === "Vespetino"){
    console.log("Boa tarde!")
}else(turnoAluno === "Noite")
    console.log("Boa noite!")

//3
let periodo=prompt("Qual turno voce estuda?")
switch(periodo){
    case "Manhã" :
    console.log("Bom dia!")
    break
    case"Vespetino" :
    console.log("Boa tarde!")
    break
    case"Noite":
    console.log("Boa noite!")
}
//4
let generoDoFilme=prompt("Qual genero do filme?")
let valorSessão=prompt("Qual valor da sessão?")
const verificar = (filme, sessão)=>{
if(filme === "fantasia"){
if (sessão <15){
 console.log("Bom filme!")
 }else{
console.log("Escolha outro filme")
}
}
verificar(generoDoFilme,valorSessão)
}
