//Exercícios de interpretação de código

//1
//console.log(filme.elenco[0]) 
//Matheus Nachtergaele,
//console.log(filme.elenco[filme.elenco.length - 1]) 
//Matheus Nachtergaele", "Selton Mello",
//console.log(filme.transmissoesHoje[2]
//{canal: "Globo", horario: "14h"}

//2

//a
//console.log(cachorro)
// Juca, 3, SDR
//console.log(gato)
//Juba,3 SDR
//console.log(tartaruga)
////Jubo,3 SDR

//b
//altera o parametro desejado

//3
//a
//console.log(minhaFuncao(pessoa, "backender"))
//false
//console.log(minhaFuncao(pessoa, "altura"))
//undefined

//b
//false , porque a variavel descrita não é a mesma do paramentro da função
//undefined , porque o parametro altura não exite dentro da função

//Exercícios de escrita de código
//1
//a 
const pessoa = {
nome: "Danielle",
apelidos: ["Dani", "Dan", "Danoninho"]

}
function  imprimeNomeApelido(obj){
return (`Eu sou ${obj.nome} mas pode me chamar de ${obj.apelidos}`)
}
imprimeNomeApelido(pessoa)
  console.log(pessoa) 

//b
const novaPessoa={
...pessoa,
apelidos:["Estress","Zangado","Conegundes"]

}
imprimeNomeApelido(novaPessoa)
  console.log(novaPessoa) 
   
  //2
  
