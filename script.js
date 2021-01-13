//*Crie um array de 5 posições com quaisquer valores. Utilize qualquer estrutura de repetição apresentada no vídeo para exibir todos os valores do array;*//

posicoes = ["posicao1", "posicao2", "posicao3", "posicao4", "posicao5"]

index=0

while (index<posicoes.length){
  console.log (posicoes[index])
  index++
}

console.log ("")

posicoes = ["posicao1", "posicao2", "posicao3", "posicao4", "posicao5"]

index=0

do{
  console.log (posicoes[index])
  index++
} while (index<posicoes.length)

console.log ("")

for(index=0;index<posicoes.length; index++){
  console.log (posicoes[index])
}

// Testado Ok!



//*Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos. Para fins de exemplo, o resultado do algoritmo com um array de valores 1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5. Procure usar uma estrutura de repetição diferente da que você usou para fazer o exercício anterior;


    //>>Executando com For<<
valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]

total=0;

for (i=0;i<valores.length;i++){
  total += valores[i]
}

media = total/valores.length

// console.log (media)


    //>>Executando com While<<
valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]
total = 0
index=0

while (index<valores.length){
  total+=valores[index]
  index++    
}

media=total/valores.length

console.log(media)

    //>>Executando com doWhile<<
valores = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]
total = 0
index=0

do{
  total+=valores[index]
  index++    
} while (index<valores.length)
media=total/valores.length

console.log(media)


// Testado Ok!


//*Considerando a lista dos 60 nomes mais comuns no Brasil nos últimos 10 anos, crie um algoritmo para verificar se seu nome está lá. Se sim, exiba a mensagem: É, nome comum :P. Se não, exiba a mensagem: Diferentão, hein? XD.*//

meuNome = "Miguel"
nomeComum = false

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", "Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia","Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", "Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", "Vinícius", "Rebeca","Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", "Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

for (index = 0; index < nomesComuns.length; index++) {
    if (meuNome == nomesComuns[index]) {
        nomeComum = true
        
    }
}

if (nomeComum) {
    console.log("É, nome comum :P")
} else {
    console.log("Diferentão, hein? XD")
}

// Testado Ok!