//Exercícios de interpretação de código
//1- Ele está somando o valor com o indice com incremnto , o valo que aparece no console é 10
//2- 
//a- 19,21,23,25,27,30
//b- Sim, poderia ser usado 
//const lista = [10,11,12,15,18,19,21,23,25,27,30]
//let maior = 0
//for(let num of lista){
//if (num > 18){
// maior = num
//}
//}
// 3- 
// 5
//Exercicio de escrita de código
//1
const quantosPets = Number(prompt("Quantos pets voce tem?"))
let nomeDoPet =[] 
if (quantosPets === 0){
   console.log("Que pena! Você pode adotar um pet!")  
} else {
     for (let i=0 ; i< quantosPets; i++){
          const nomePet = prompt("Digite o nome do pet!")
        nomeDoPet.push(nomePet)
     }
} 

console.log(nomeDoPet)
     
//2
const arrayOriginal = [60, 20, 10, 40, 60, 21, 100, 120, 90, 75, 110, 55]
for (let i = 0; i < arrayOriginal.length; i++) {
     console.log(arrayOriginal[i]);
}

for (let i = 0; i < arrayOriginal.length; i++) {
     let valor = arrayOriginal[i];
     console.log(valor / 10);
}
const arrayPares = []
for (let pares of arrayOriginal) {
     if (pares % 2 === 0) {
     arrayPares.push(pares)
     }
     console.log(arrayPares)
     
}

let stringArray = []
let indice = 0
 for (let texto of arrayOriginal) {
    stringArray.push(`O elemento do índex ${indice} é: ${texto}`)
    indice++
}
console.log(stringArray)

