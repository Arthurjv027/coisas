var diaData1 = document.getElementById("diaData1")
var mesData1 = document.getElementById("mesData1")
var anoData1 = document.getElementById("anoData1")

var diaData2 = document.getElementById("diaData2")
var mesData2 = document.getElementById("mesData2")
var anoData2 = document.getElementById("anoData2")

var labelResultado = document.getElementById("resultado")
var labelDiferenca = document.getElementById("Diferenca")


function calcDiferenca(){
    var d1Dia = diaData1.value
    var d1Mes = mesData1.value
    var d1Ano = anoData1.value

    var d2Dia = diaData2.value
    var d2Mes = mesData2.value
    var d2Ano = anoData2.value

    var totalAno = d1Ano - d2Ano
    var totalmes = d1Mes - d2Mes
    var totaldia = d1Dia - d2Dia
 
    total = ((d1Ano - d2Ano)*365) - ((d1Mes - d2Mes)*30) - (d1Dia - d2Dia)

    var Dataantes = new Date(totalAno,totalmes,totaldia)

    console.log(Math.abs(total))
    console.log(totalAno,totalmes,totaldia)

    labelResultado.innerHTML = Math.abs(total)
    labelDiferenca.innerHTML = Dataantes
    
}