import { timer } from './cronometro.js'
setInterval(() => {
    timer()
}, 1000)

let imagens = document.querySelectorAll('.patrocinadores img')
let indiceAtual = 0
setInterval(proximaImagem, 2000)

function proximaImagem() {
    if (indiceAtual > (imagens.length - 1)) {
        indiceAtual = 0
    }
    if (!imagens[indiceAtual].classList.contains('hide')) {
        imagens[indiceAtual].classList.add('hide')
        indiceAtual = (indiceAtual + 1)
    } else {
        imagens[indiceAtual].classList.remove('hide')
    }
}

document.querySelector('#real').addEventListener('click', () => {
    document.querySelector('#real').classList.add('around')
    setTimeout(() =>{
        document.querySelector('#real').classList.remove('around')
    }, 1600)
    
})

document.querySelector('#barcelona').addEventListener('click', () => {
    document.querySelector('#barcelona').classList.add('around')
    setTimeout(() =>{
        document.querySelector('#barcelona').classList.remove('around')
    }, 1600)
    
})



