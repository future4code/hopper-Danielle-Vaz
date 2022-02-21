// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let larguraRetangulo = Number (prompt("digite a largura do retangulo : "))
let alturaRetangulo = Number (prompt("digite a altura do retangulo : "))
let resultadoDaArea = larguraRetangulo * alturaRetangulo
console.log(resultadoDaArea)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoHoje = Number (prompt("digite o ano que estamos atualmente: "))
let anoNascimento = Number(prompt("digite o ano do seu nascimento: "))
let idade = anoHoje - anoNascimento
console.log (idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / ( altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = (prompt("Qual seu nome?"))
const idade = Number(prompt("Qual sua idade?"))
const email = (prompt("digite seu e-mail:"))
console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const coresFavoritas = []
const corFavorita1 = prompt("")
const corFavorita2 = prompt("")
const corFavorita3 = prompt("")
const coresAdicionadas = coresFavoritas.push(corFavorita1, corFavorita2, corFavorita3)
console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(str) {
let string = str.toUpperCase();
return string;
}
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngressos) {
  // implemente sua lógica 
let custo1 = Number(3000)
let valorIngresso = Number(100)
return precisaSerVendido = custo/valorIngressos
}
// EXERCÍCIO 08
function checaStringsMesmoTamanho(palavra1, palavra2) {
let primeiraString = palavra1;
let segundaString = palavra2;

if (primeiraString.length === segundaString.length) {
  return true;
} else
return false;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(frutas) {
let sacolao = frutas
return sacolao[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(frutas) {
let sacolao = frutas;
return(sacolao[sacolao.length - 1]);
}
 
// EXERCÍCIO 11
function trocaPrimeiroEUltimo(frutas) {
let sacolao = frutas
let primeiraPosicao = sacolao[0];
let ultimaPosicao = sacolao[sacolao.length - 1];
sacolao[sacolao.length - 1] = primeiraPosicao
sacolao[0] = ultimaPosicao

return sacolao
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.localeCompare(string2,  undefined, { sensitivity: 'base' }) === 0;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
