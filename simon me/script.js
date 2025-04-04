
let colopalet = ['y','b','g','r']
let started = false
let level =0
let uq=[]
let gq= []
let hc = 0;
let p = document.querySelector('p')
let h4 = document.querySelector('h4')

function gameflash(ranbtn){

ranbtn.classList.add('flash')
setTimeout(function(){
    ranbtn.classList.remove('flash')
}, 230);
console.log(this);

}
function reset(){
    started = false
    uq = []
     gq = []
     level =0
}

function checkAns(idx){
 if(uq[idx] === gq[idx]){
     if(uq.length == gq.length){
        setTimeout(levelup,1000)
     }
 }else{
    console.log(uq);
    
    console.log("wrong");
        h4.innerText= `gameover you core is ${level-1} press any key to star t game`
     hc += level-1
        p.innerText = `highest score is : ${hc}`
    reset()
 }
}

function userflash(t){
    t.classList.add('userflash')

    setTimeout(function(){
        t.classList.remove('userflash')
    }, 234);
}
document.addEventListener("keypress", function(e){
    if(started == false){
        started = true
levelup()
    }

    
})

function levelup(){
    level++
    uq = []
h4.innerText = `level : ${level}`

let idx = Math.floor(Math.random() *4)
let ranc = colopalet[idx]
let ranbtn = document.querySelector(`.${ranc}`)
gameflash(ranbtn)
gq.push(ranbtn.getAttribute('id'))
console.log(gq);

}
function btnpress(){
    let id = this.getAttribute('id')
    userflash(this)
    uq.push(id)
    checkAns(uq.length-1)
}
let allbtn = document.querySelectorAll('.box')
for(btn of allbtn){
    btn.addEventListener("click",btnpress)
}