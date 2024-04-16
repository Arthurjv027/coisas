/*
function fatorial(num){
	var resultado = 1
	for (var i = num; i > 1; i--){
		resultado = resultado * i
	}
	return resultado
}

console.log(fatorial(5))
*/

var x     // Declaração de varial
x = 0    // Atribuição de varial
x       // => 0 x vale 0

//JavaScript aceita varios tipos de valores
x = 1                  // numeros
x = 1.01              // Apenas um tipo Numer para inteiros e reais.
x = "hello world"    // String de texto entre aspas
x = "JavaScript"    // Apóstrofos tembém delimitam strings
x = true           // Valor booleano
x = false         // Outro valor booleano
x = null         // Null e um valor nulo "nenhum valor"
x = undefined   // Undefinede como null

console.log(x)

//Dois outros tipos muito importantes que devem ser lembrados são os arrays e os obejetivos 

var livro = {                // Obejetivos são colocados entre chaves
    topico: 'JavaScript',   // A propriedade "topico" tem valor "JavaScript"
    avaliativo: true       // A propriedade "avaliativo" tem o valor "true"
}                         // A chave marca o fim do obejetivo

// A propriedade pode ser acessada com . ou []

console.log(livro.topico)            // Acessando propriedade via .
console.log(livro["avaliativo"])    // Acessando propriedade via []
livro.autor = "Kanye West"         // Acresetando propriedade autor
console.log(livro.autor)          
livro.assunto = {}               // {} é um objeto vazio sem qualquer propriedade 

//JavaScript também aceita arrays (lista indexadas numericamente) de valores 

var primos = [2, 3, 4, 5, 7]                // Um array de 4 valores
console.log(primos)                        
console.log(primos[0])                    // Chamando a posição inicial
console.log(primos.length)               // Chamando o tamanho do array
console.log(primos[primos.length-1])    // Chamando a ultima posição
primos[4] = 9                          // Adicionando um novo elemento
primos[4] = 11                        // Alterando o elemento
console.log(primos)

var empty = []                     // Criando array vazio
console.log(empty.length)

// Os array e objetos podem conter outros arrays e objetos

var coordenadas = [                                  // Um array com 2 elementos
    {x:0, y:8},                                     // Cada elemento é um objeto
    {x:1, y:1}
]

var data = {                                    // Objeto com 2 propriedades 
    trial1:[[1,2],[3,4]],                      // O valor de cada  propriedade  é um array
    trial2:[[2,3],[4,5]]                      // Os elementos dos arrays são arrays

}