function getComputerChoice(){
    let x = Math.floor(Math.random() * 3 + 1);
    switch(x){
        case 1:
            return "rock"
            break;
        case 2: 
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
    computerChoice = x;
}
function showScore(){
    console.log(`***********           SCORE           ***********`);
    console.log(`***********          COMPUTER         ***********`);
    console.log(`***********     SCORE: `,scoreComputer,"              ***********");
    console.log(`***********           SCORE           ***********`);
    console.log(`*********-**          PLAYER           ***********`);
    console.log(`***********     SCORE: `,scoreUser,`              ***********`);
}
function playRound(){
    if(scoreUser < 3 && scoreComputer < 3){
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
            computerChoice = getComputerChoice();
            console.log(`You chose ` + playerChoice + `. The computer chose ` +computerChoice + `.`);
                if(playerChoice == "rock" && computerChoice == "rock"){
                    console.log("It's a tie!");
                }
                else if(playerChoice == "rock" && computerChoice == "paper"){
                    console.log("You lose!");
                    scoreComputer++;
                }
                else if(playerChoice == "rock" && computerChoice == "scissors"){
                    console.log("You win!");
                    scoreUser++;
                }
                else if(playerChoice == "paper" && computerChoice == "paper"){
                    console.log("It's a tie!");
                }
                else if(playerChoice == "paper" && computerChoice == "scissors"){
                    console.log("You lose!");
                    scoreComputer++;
                }
                else if(playerChoice == "paper" && computerChoice == "rock"){
                    console.log("You win!");
                    scoreUser++;
                }
                else if(playerChoice == "scissors" && computerChoice == "scissors"){
                    console.log("It's a tie!");
                }
                else if(playerChoice == "scissors" && computerChoice == "rock"){
                    console.log("You lose!");
                    scoreComputer++;
                }
                else if(playerChoice == "scissors" && computerChoice == "paper"){
                    console.log("You win!");
                    scoreUser++;
                }
                showScore();
                if(scoreUser === 3){
                    alert("You won the game!")
                } else if(scoreComputer === 3){
                    alert("You lost the game!")
                }
            }
        }
        else{
            alert("Game over. Press RESET to play another game.")
        }
};
function resetScore(){
    scoreUser = 0;
    scoreComputer = 0;
    lastScore = {
        "computer" : scoreComputer,
        "user" : scoreUser,
    }
    alert(`Score was reset! Make a new choice to start a new game! :)`)
};
function choseRock(){
    playerChoice = "rock";
    playRound()
}
function chosePaper(){
    playerChoice = "paper";
    playRound()
}
function choseScissors(){
    playerChoice = "scissors";    
    playRound()
}
var scoreUser = 0;
var scoreComputer = 0;
