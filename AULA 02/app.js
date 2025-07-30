/*************************************************************************
 * Objetivo: Criar um app para o calculo de médias Escolares
 * Autor: Gustavo Pereira
 * Data: 30/07
 * Versão: 1.0
 *************************************************************************/

//Import da biblioteca para permitir a entrada de dados pelo terminal
var readline = require('readline')

//Criando uma interface de entrada e saída de dados no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/**
 * Criando variaveis
 * VAR -> Permite criar um espaço em memória (variável) que pode ser alterado na programação. Obs: Metodo antigo de criar variáveis
 * 
 * LET -> Permite criar um espaço em memória (variável) que pode ser alterado na programação. Essas variáveis "morrem" ao término do bloco. Obs: Deve-se utilizar apenas dentro de bloco { }, por exemplo: IF, Function, Loop, etc
 *  
 * CONST -> Permite criar um espaço em memória (constante) que NÃO pode ser alterada na programação, a CONST pode ser utilizada em qualquer parte do código. Obs: É uma boa prática se possível usar letras MAIUSCULAS.
 *
* toUpperCase() -> Converte a string para MAIUSCULO
* toLowerCase() -> Converte a string pra minusculo
*
* Conversão de tipos de dados
* String()     -> Converte um objeto ou variavel para o tipo de dados String
* 
* Number()     -> Converte uma variavel para numero, podendo ser int ou float conforme a necessidade
* 
* parseInt()   -> Converte uma variavel para um numero inteiro
* 
* parseFloat() -> Converte uma variavel para um numero decimal
* 
* Boolean()    -> Converte uma variavel para um numero booleano (true/false)
* 
* Object()     -> Converte uma variavel para um objeto (array, json, classe)
*
* Operadores de Comparação
*
* == Validação para comparar a igualdade de conteudos
*
* != Validação para comparar a diferença entre conteúdos
*
* < Validação para verificar o menor valor
*
* > Validação para verificar o maior valor
*
* <= Validação para verificar a igualdade e o menor valor
*
* >= Validação para verificar a igualdade e o maior valor
*
* === Validação para comparar a igualdade de conteudo e a igualdade de tipos de dados 
*
* !== Validação para comparar a diferença de conteudo e a igualdade de tipos de dados 
*
* !=! Validação para comparar a diferença de conteudo e a diferença de tipos de dados 
*
*
* Operadores Lógicos 
* E   AND &&
* OU  OR  ||
* NÃO NOT !
*
*
*/



//Entrada de dados do Nome
entradaDeDados.question('Digite o nome do aluno: ', function(nome){

    let nomeAluno = String(nome).toUpperCase()

    //Entrada de dados da nota1
    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1

        //Entrada de dados da nota2
        entradaDeDados.question('Digite a nota 2: ', function(valor2){
            let nota2 = valor2

            entradaDeDados.question('Digite a nota 3: ', function(valor3){
                let nota3 = valor3

                entradaDeDados.question('Digite a nota 4: ', function(valor4){
                    let nota4 = valor4
                    
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: Não foi possível calcular a média, pois existem campos que não foram preenchidos!')
                    }else if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10 ){
                        console.log('ERRO: Não é possível receber valores menores que 0 ou valores maiores que 10')
                    }else{
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                        let statusAluno
                        
                        if(media < 5){
                            statusAluno = 'REPROVADO'
                        }else if(media >= 5 && media < 7){
                            statusAluno = 'EXAME'
                        }else if(media >=7 && media <= 10){
                            statusAluno = 'APROVADO'
                        }


                        console.log(`O aluno ${nomeAluno} teve a média: ${media.toFixed(1)} e está ${statusAluno}`)
                    }



                })//Fecha a entrada da nota4
            })//Fecha a entrada da nota3 
        })//Fecha a entrada da nota2
    })//Fecha a entrada da nota1
})//Fecha a entrada do nome