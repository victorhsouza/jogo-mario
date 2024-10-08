var mario = document.querySelector('.mario')
var tunel= document.querySelector('.tunel')
var pontos = document.querySelector('#pontos')
var inputMario = document.querySelector('#input-mario')

var pontuacao = 1

var pulo = (event)=>{

    if(event.keyCode == 32){
        var qtdPontos = pontuacao++
        pontos.innerText = qtdPontos    
        console.log(event)
        mario.classList.add('pulo')

        setTimeout(()=>{
             mario.classList.remove('pulo')
        },500)
    }
    
}
var loop = setInterval(()=>{
    let posicaoTunel = tunel.offsetLeft

    let posicaoMario = Number(window.getComputedStyle(mario).bottom.replace('px',' ')) 

    
    if(posicaoTunel <= 93 && posicaoTunel > 0 &&    posicaoMario < 83){
        
        tunel.style.animation = 'none'
        tunel.style.left = '93px'

        mario.style.animation = 'none'
        mario.style.bottom = `${posicaoMario}px `

        mario.src = 'img/game-over.png'
        mario.style.width = '75px'

        mario.style.marginLeft = '30px'

        
        mario.style.animation ='cair 1s linear'

        setTimeout(()=>{
            mario.classList.add('desaparecer')
        }, 1000)
        

        clearInterval(loop)
         
    } else{
        
    }
    
},10)

//  var perder = ()=>{
//     if(tunel <= 93){

//     }
//  }

document.addEventListener('keydown',pulo)
