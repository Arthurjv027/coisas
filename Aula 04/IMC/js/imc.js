var inputN1 = document.getElementById("n1")
var inputN2 = document.getElementById("n2")

var labelResultado = document.getElementById("resultado")

function imc(){

    var n1 = parseFloat(inputN1.value)
    var n2 = parseFloat(inputN2.value)
    
    var resultado = (n2 / (n1*n1))
    
    if(resultado > 40){
        resultado = 'Obesidade III (Mórbida)'
    }else if(resultado > 35){
        resultado = 'Obesidade grau II (Severa)'
    }else if(resultado > 30){
        resultado = 'Obesidade grau I'
    }else if(resultado > 25){
        resultado = 'levemente acima do peso'
    }else if(resultado > 18,5){
        resultado = 'Peso ideal (Parabéns)'
    }else{
        resultado = 'Abaixo do peso'
    }

    labelResultado.innerHTML = resultado

    console.log(resultado)

}