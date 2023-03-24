
var minutos = 0
var segundos = 0

function timer() {
    segundos++ 

    if (segundos == 60) { 
        segundos = 0
        minutos++

        if (minutos == 60) {
            minutos = 0
        }
    }

    var format = (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos)
    document.querySelector('.timer').innerHTML = format
    
}

export { timer }