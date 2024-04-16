//Objeto Math

var resultado

resultado = Math.pow(2,53)                // 2 elevado a 53
resultado = Math.round(0.5)              // Arredonda para o inteiro mais próximo
resultado = Math.floor(0.5)             // Arredonda para o inteiro inferior
resultado = Math.ceil(0.1)             // Arredonda para um inteiro acima
resultado = Math.abs(-5)              // Retorna o valor sempre positivo o absoluto
resultado = Math.max(99,88,8,54)     // Retorna o Maior valor 
resultado = Math.min(99,88,8,54)    // Retorma o Menor valor
resultado = Math.PI                // Numero PI
resultado = Math.sqrt             //  Raizquadrada

// console.log(resultado)

// Data e Hora

var antes = new Date(2020, 0, 1)                // O 1° dia do 1° mes de 2020
var depois = new Date(2020, 0, 1, 17, 10, 30)  // Mesmo dia, ás 17:10:30 da tarde
var agora = new Date ()                       // Pega a data e hora de agora
var duracao = depois - antes                 // Pega a duração em milisegundos
duracao = duracao/1000/60/60                
                                           
elemento = depois.getFullYear()                // Pegando o ano
elemento = depois.getMonth()                  // Pegando o mes
elemento = depois.getDay()                   // Pegando o dia
elemento = depois.getDate()                 // Pegando o dia do mes
elemento = depois.getHours()               // Pegando a hora
elemento = depois.getUTCHours()           // Pegando hora no formato UTC (3+ usando o de brasilia)
elemento = depois.toString()             //Exibindo como String
elemento = depois.toLocaleDateString()  // Data padrao


console.log(elemento)                    
