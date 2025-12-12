let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const mssg=document.querySelector("#mssg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const gameDraw=()=>{
    mssg.innerText="Game was Draw. Play Again";
    mssg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        mssg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        mssg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        mssg.innerText=`You Lose. ${compChoice} beats your choice ${userChoice}`;
        mssg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){ //game draw
        gameDraw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach( (choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        });
});