let userScore=0;
let compScore=0;
const userScore_Span=document.getElementById("UserScore");
const compScore_Span=document.getElementById("ComputerScore");
const scoreboard_div=document.querySelector("scoreboard");
let Result_p=document.querySelector(".Result >p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissor_div=document.getElementById("scissor");
const reset_button=document.getElementById("reset");
// the above is called caching/storing the DOM
// this is activated when we click on rock
function wins(user,comp){
    userScore++;
    userScore_Span.innerHTML=userScore;
    Result_p.innerHTML="Your "+user+" Beats  Computer's  "+comp+".You Win 😃";
    
}
function loses(user,comp){
    compScore++;
    compScore_Span.innerHTML=compScore;
    Result_p.innerHTML="Computer's "+comp+"  Beats  Your "+user+".You Lose 😔";
    

}
function draw(user,comp){
    Result_p.innerHTML="DRAW 😐"

}
function getComputerChoice(){
    const choices=["Rock","Paper","Scissor"];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function game(userChoice){
    const computerChoice=getComputerChoice();
    // console.log("Computer Choice"+computerChoice);
    // console.log("Your choice"+userChoice);
    switch(userChoice+computerChoice){
        case "RockPaper":
            case "PaperRock":
                case "ScissorPaper":
                    wins(userChoice,computerChoice);
                   
                    break;
                    case "RockPaper":
                        case "PaperScissor":
                            case "ScissorRock":
                               loses(userChoice,computerChoice);
                                break;
                                default:
                                    draw(userChoice,computerChoice);
    }

}
Main();
function Main(){
rock_div.addEventListener('click',function(){
    
    game("Rock");
   
})

paper_div.addEventListener('click',function(){
    game("Paper");
    
})

scissor_div.addEventListener('click',function(){
    game("Scissor");
    
})
}


function replay(){
    compScore_Span.innerHTML=0;
    userScore_Span.innerHTML=0;
}
reset_button.addEventListener('click',function(){
    replay();
})