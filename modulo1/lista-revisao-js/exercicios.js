// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

const array=["chocolate","sorverte","pizza","cerveja"]
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
const arrayInvertido=[35,60,25,5,37,98]
function retornaArrayInvertido(arrayInvertido) {
 return arrayInvertido.reverse()
}

// EXERCÍCIO 03
const arrayOrdenado=[3,9,2,38,91,43,61,5,4,29,25]
function retornaArrayOrdenado(arrayOrdenado) {
    arrayOrdenado.sort((a,b) =>{
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })
    return arrayOrdenado;
    
}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
   let pares = []
   for (let numeros of array) {
         if (numeros % 2 == 0) {
         pares.push(numeros)
         }
        }
         return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosParesAoQuadrado = []
    for (let numeros of array) {
          if (numeros % 2 == 0) {
             let numerosAoQuadrado= numeros * numeros
          numerosParesAoQuadrado.push(numerosAoQuadrado)
          }
         }
          return numerosParesAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (let numero of array) {
        if (numero > maiorNumero) {
            maiorNumero=numero
        }   
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
const numeroMaior = ()=>{
    if (num1 > num2) {
        return num1
    } else{
        return num2
    }
    }
    const divisão =()=>{
        if (num1 > num2) {
           if (num1 % num2 == 0) {
               return true
           }else{
               return false
           } 
        }else{
            if (num2 % num1 == 0) {
                return true
            }else{
                return false
                
            }
        }
}
const valoresDiferentes = ()=>{
    if (num1 > num2) {
      const diferenca = num1 -num2
      return diferenca  
    }else{
        const diferenca = num2 - num1
        return diferenca
    }
}
const saidas={
    numeroMaior:numeroMaior(),
    maiorDivisivelPorMenor:divisao(),
    diferenca:valoresDiferentes()

}
return saidas
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = []
   let i = 0
   let n2 = 0
   while (i < n) {
       numerosPares.push(n2)
       n2+=2
       i++
   }
   return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoB === LadoC){
    return "Equilatero"
}else if(ladoA===ladoB || ladoA===ladoC || ladoA ===ladoA)
return "Isosceles"
}else{
    return "Escaleno"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}