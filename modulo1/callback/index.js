//Exercícios de interpretação de código
//1
//a) Será impresso um novo array que realizará o percurso dentro do 
//array inicial fazendo a repetição da seleção de nomes com os respectivos 
//apelidos e irá devolver um array com somente um nome e o apalido respectivo.
//2
//a) Terá como retorno o nome e sobrenome.
//3
//a) Irá retor os noemes e apelidos de Amanda e Lais
 //Exercícios de interpretação de código
 //1
 //a)
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"}
  ]
  const nomePets = pets.map((item,index,array)=> {
return item.nome

  })

  console.log(nomePets)
  
  //b)
    const bichinhos = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"}
  ]
  const racaPets = bichinhos.filter((item, index, array) => {
    return item.raca ==="Salsicha"
  })
  console.log(racaPets)

  //c 
  const desconto = pets.filter((dog)=>{
    return dog.raca === "Poodle"

  }).map((poodle)=> {
    return(`Voce ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}`)
  })

  console.log(desconto)

//2
//a)
const produtos = [
 { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
 { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
 { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
 { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
 { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
 { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
 { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
 { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
 { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
 { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
const nomeProdutos = produtos.map((item,index,array)=> {
return item.nome

})

console.log(nomeProdutos)

//b)
const promocao = produtos.map((produto)=>{

  const objeto ={
    nome: "produto"
    preco: produto.preco * 0.95 
  }
  return objeto
}) 
console.log(promocao)
//c)

const bebidas = produtos.filter((prod) => {

  return prod.categoria ==='Bebidas'
})
console.log(bebidas)


//d)
const produtoYpe = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]
   const palavraYpe = produtoYpe.filter((produtosYpe)=> {
   return produtoYpe.nome.includes(`Ypê`)
   
   })
   
   console.log(palavraYpe)
   