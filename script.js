
   let input=document.getElementById('user-choice')
  let computer=document.getElementById('computer-choice')
  let result=document.getElementById('result')

let btn1=document.getElementById("snake")
let btn2=document.getElementById("water")
let btn3=document.getElementById("gun")
let reset=document.getElementById("restart")

let choice=["snake","water","gun"]

btn1.addEventListener("click",()=>{
    
    let userguess="snake";
    let randomchoice=choice[Math.floor(Math.random()*choice.length)]

    if(userguess==randomchoice){
        result.textContent="🤝draw"
        
    }
    
    else if(userguess=="snake"&&randomchoice=="water"){
        result.textContent="🎉 you win"




    }

    else if(userguess=="snake"&&randomchoice=="gun"){
result.textContent="💀 you loose"

    }

    input.textContent=userguess
    computer.textContent=`${randomchoice}`


})



// btn2
btn2.addEventListener("click",()=>{
    
    let userguess="water";
    let randomchoice=choice[Math.floor(Math.random()*choice.length)]

    if(userguess==randomchoice){
        result.textContent="🤝draw"
        
    }
    
    else if(userguess=="water"&&randomchoice=="gun"){
        result.textContent="🎉 you win"




    }

    else if(userguess=="water"&&randomchoice=="snake"){
result.textContent="💀 you loose"

    }

    input.textContent=userguess
    computer.textContent=`${randomchoice}`


})



// btn3
btn3.addEventListener("click",()=>{
    
    let userguess="gun";
    let randomchoice=choice[Math.floor(Math.random()*choice.length)]

    if(userguess==randomchoice){
        result.textContent="🤝draw"
        
    }
    
    else if(userguess=="gun"&&randomchoice=="snake"){
        result.textContent="🎉 you win"




    }

    else if(userguess=="gun"&&randomchoice=="water"){
result.textContent="💀 you loose"

    }

    input.textContent=userguess
    computer.textContent=`${randomchoice}`


})

// reset button

reset.addEventListener("click",()=>{

result.textContent="-";
input.textContent="-";
computer.textContent="-";

})
