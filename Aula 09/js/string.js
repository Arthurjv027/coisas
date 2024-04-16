var frase = 'Salve Salve truta comi mo \"bolo\" de \nchocolate mil grau' // o contrabarra é usado para escapar caracteres.

var uc = "PROJETO INTEGRADOR III: GRAND PRIX"

var abreviado = uc.charAt(0)              // O primeiro caractere 
abreviado = uc.charAt(uc.length-1)       // Pega o ultimo  caractere
abreviado = uc.substring(8,18)          // Pegando intervalos
abreviado = uc.substring(18)           // Pegando a partir de determinado ponto
abreviado = uc.slice(0,7)             // Funciona de forma simmiar ao substring
abreviado = uc.slice(-10)            // Pegando os ultimos 10 caracteres
abreviado = uc.indexOf("I")         // Buscando termos
abreviado = uc.split(" ")


var abreviad2 = uc.split(" ")
var abreviad3 = uc.slice(0,4) +" . "+ abreviad2[abreviad2.length-1]

//Criando uma função
function resumo(arrayAula){
    arrayAula = arrayAula.split(" ")
    arrayAula = arrayAula[0].substring(0.4)+"."+arrayAula[arrayAula.length-1]
    return arrayAula
}