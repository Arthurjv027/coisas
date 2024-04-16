atualizaHorario()

//Criando o Relogio

function atualizaHorario(){

    const relogio = document.getElementById('relogio')
    const semana = document.getElementById('semana')
    const hoje = new Date()
    
    let h = hoje.getHours()
    let m = hoje.getMinutes()
    let s = hoje.getSeconds()
    let a = hoje.getDay()

    let saudacao
    
    h = verificaTempo(h)
    m = verificaTempo(m)
    s = verificaTempo(s)
       
    relogio.innerHTML = h+":"+m+":"+s

    if(h < 12){
        saudacao = "BOM DIA!!!"
    }else if( h < 18){
        saudacao = "BOA TARDE!!!"
    }else{
        saudacao = "BOA NOITE!!!"
    }

    console.log(a)

    switch (a) {
        case 0:
            semana.innerHTML = 'DOMINGO' + " - " + saudacao;;
            break;
        case 1:
            semana.innerHTML = 'SEGUNDA - FEIRA' + " - " + saudacao;
            break;
        case 2:
            semana.innerHTML = 'TERÇA - FEIRA' + " - " + saudacao;
            break;
        case 3:
            semana.innerHTML = 'QUARTA - FEIRA' + " - " + saudacao;
            break;
        case 4:
            semana.innerHTML = 'QUINTA - FEIRA' + " - " + saudacao;
            break;
        case 5:
            semana.innerHTML = 'SEXTA - FEIRA' + " - " + saudacao;
            break;
        case 6:
            semana.innerHTML = 'SABADO' + " - " + saudacao;
            break;
    }

    setTimeout(atualizaHorario,1000)
}

// Adicionando o 0 em numeros menores que 10

function verificaTempo(t){

    if (t < 10){
        t = "0" + t
    }

    return t

}



