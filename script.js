
let gameSeq = []
let userSeq = []
let highest =0
let color = ['y','b','g','r']

let h3 = document.querySelector('h4')
let p = document.querySelector('p')
let level =0
let started =false
document.addEventListener("keypress",function(e){
    if(started == false){
        started = true
        console.log("started");
       
        levelup()
    }
})

function gameFlash(btn){
btn.classList.add('flash')

setTimeout(function(){
btn.classList.remove('flash')
},250)
}

function userFlash(btn){
    btn.classList.add('userflash')
    
    setTimeout(function(){
    btn.classList.remove('userflash')
    },250)
    }

function levelup(){
    userSeq=[]
level++
h3.innerText = `level = ${level}`

//random btn
let randidx = Math.floor(Math.random() * 3)
let randColor = color[randidx]
let ranbtn = document.querySelector(`.${randColor}`)
gameSeq.push(randColor)
console.log(gameSeq);

gameFlash(ranbtn)
}
function reset(){
    level = 0
    gameSeq = []
    userSeq = []
    started = false
    // document.querySelector("body").style.backgroundColor = "white"
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
         if(userSeq.length == gameSeq.length){
    setTimeout(levelup,1000)
         }

    }else{
     h3.innerHTML= `game over! score was <b>${level-1}</b>press any key to start again`
      document.querySelector("body").style.backgroundColor = "red"
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white"

      },150)
      highest  +=level-1;
      p.innerText= `highest score is ${highest}`
reset()
    }
 
    
}

function btnpress(e){
    let btn = this;
    let color = btn.getAttribute('id')
   userSeq.push(color)
    
   userFlash(this)

   checkAns(userSeq.length-1)
}

let allbtns = document.querySelectorAll('.btn')

for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}
