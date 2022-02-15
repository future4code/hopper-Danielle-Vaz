//Exercicios de Interpretação de código

//Undefined

//Null

//11

//3

//[3,19,5,6,7,8,9,10,11,12,13]

//9

//SUBI NUM ÔNIBUS EM MARROCOS, 27

//Exercicio de Escrita de Código
//1
const emailDoUsuario = prompt ("qual é seu e-mail")
const nomeDoUsuario = prompt ("qual é seu nome")
console.log(`O e-mail do usuário`  +emailDoUsuario+  `foi cadastrado com sucesso.Seja bem vinda`  +nomeDoUsuario)

//2
console.log("Essas são minhas comidas  preferidas:")
const comidasPreferidas  = ["Tropeiro", "Salpicão", "Pizza", "Churrasco", "Farofa"]
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const preferida = prompt("comida preferida")
comidasPreferidas[1] = preferida
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

//3
const listaDeTarefas = []
listaDeTarefas.push ("tarefas 1")
listaDeTarefas.push ("tarefas 2")
listaDeTarefas.push ("terefas 3")
console.log(listaDeTarefas)
listaDeTarefas.splice((prompt("Qual tarefa já foi realizada?0,1 ou 2?")),1)
console.log(listaDeTarefas)

//Desafios

const frase = ("Estou amando o curso apesar de ser muito dificil")
frase.push[frase]
